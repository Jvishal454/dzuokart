import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  productData: any;
  discountPercent;
  formData = new UntypedFormGroup({
    address: new UntypedFormControl(null, [Validators.required])
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void   {
    this.activatedRoute.queryParams.subscribe(x => {
      let selectedProduct = x;
      this.appService.getProductItem(selectedProduct['pid']).subscribe(data => {
        this.productData = data;
        this.discountPercent = Math.round(((this.productData.price.actual - this.productData.price.discounted)/this.productData.price.actual)*100)
      });
    });
  }

  selectedChip(itemsize){
      console.log(itemsize)

  }

  onAddressFilled(){
    console.log('address filled')
    console.log(this.formData.value.address);
  }
}
