import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
