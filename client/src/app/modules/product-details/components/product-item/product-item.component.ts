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
    this.fetchAddress()
  }

  selectedChip(itemsize){
      console.log(itemsize)

  }

  onAddressFilled(){
    console.log('address filled')
    console.log(this.formData.value.address);

    const loggedInUser = this.appService.svUserData;
    console.log('logged in ',loggedInUser.user.email)
    // Trimmed value to check if it's empty or contains only spaces
    this.formData.value.address.trim();
    if(this.formData.value.address && this.formData.value.address != ''){
      this.appService.addUserAddress(this.formData.value.address, loggedInUser.user.email).subscribe((res: any) => {
        console.log('add fill',res);
        this.openSnackBar(res.message, 'close')
      });
    }
    else{
      this.openSnackBar('Please fill in address', 'close')
    }
  }

  // if user address exists/previosuly filled we set the address
  fetchAddress(){
    const data = JSON.parse(localStorage.getItem('user_data'));
    this.userDetails = data.user;
    if(this.userDetails.address && this.userDetails.address != 'false' ){
      this.formData.get('address').setValue(this.userDetails.address);
    }
    // console.log('user data',data.user);  
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

  wishlist(){ 
    console.log('wishlisted item is ', this.productData);
    const data = JSON.parse(localStorage.getItem('user_data'));
    console.log('user data',data.user.email);
    
    this.appService.wishList(data.user.email ,this.productData).subscribe( (res) => {
      console.log('wishlist resp', res);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
