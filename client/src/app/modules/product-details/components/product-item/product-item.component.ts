import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icons } from 'src/app/shared/shared/icons';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  productData: any;
  discountPercent;
  shippingDate;
  userAddress;
  userDetails;
  formData = new UntypedFormGroup({
    address: new UntypedFormControl(null, [Validators.required])
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    // this.authService.userDetails$.subscribe((userDetails) => {
    //   this.userDetails = userDetails;
    //   console.log(this.userDetails.user.email)
    // });
    this.RegisterIcons();
  }

  private RegisterIcons(){
    for( const [iconName, iconPath] of Object.entries(icons)){
      this.matIconRegistry.addSvgIcon(
        iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
      );
    }
  }

  ngOnInit(): void   {
    this.activatedRoute.queryParams.subscribe(x => {
      let selectedProduct = x;
      this.appService.getProductItem(selectedProduct['pid']).subscribe(data => {
        this.productData = data;
        this.discountPercent = Math.round(((this.productData.price.actual - this.productData.price.discounted)/this.productData.price.actual)*100);
        this.productData.ratings.count = this.getformattedCount(this.productData.ratings.count);
      });
    });
    
    this.getShippingDate();
    // this.currentDate = new Date().toDateString();
    
  }

  selectedChip(itemsize){
      console.log(itemsize)

  }

  onAddressFilled(){
    console.log('address filled')
    console.log(this.formData.value.address);

    const loggedInUser = this.appService.svUserData;
    console.log('logged in ',loggedInUser.user.email)
    this.appService.addUserAddress(this.formData.value.address, loggedInUser.user.email).subscribe((res: any) => {
      console.log('add fill',res);
      this.openSnackBar(res.message, 'close')
    });
  }

  getShippingDate(){
    var current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
    var followingDay = new Date(current.getTime() + (86400000 * 3)); // + 3 day in ms
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    this.shippingDate = daysOfWeek[followingDay.getDay()] + ' ' +
    months[followingDay.getMonth()] + ' ' +
    ('0' + followingDay.getDate()).slice(-2) + ' ' +
    followingDay.getFullYear();

    // console.log(formattedDate);

  }

   getformattedCount(value: number){
     if (value >= 1000 && value <= 99999) {
      return (value / 1000).toFixed(1) + 'k';
    } else if (value >= 100000 && value <= 99999999) {
      return (value / 100000).toFixed(1) + 'L';
    }
    else{
      return value;
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
