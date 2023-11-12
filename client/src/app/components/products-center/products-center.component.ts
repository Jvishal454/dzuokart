import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-products-center',
  templateUrl: './products-center.component.html',
  styleUrls: ['./products-center.component.scss']
})
export class ProductsCenterComponent {
  products;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getMProducts().subscribe((data) => {
      // console.log('prod center products', data);
      this.products = Array.isArray(data) ? data.slice(0, 5) : Object.values(data).slice(0, 5);
    });
  }
  
  //for now its there but cannot use this as the data goes away upon refresh.
  clickedProduct(event, product){
    this.appService.selectedProduct = product;
    console.log('product is', product)
  }

  getdata(){
      console.log('data',this.appService.selectedProduct)
  }
}
