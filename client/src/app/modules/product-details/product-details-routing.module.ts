import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

const routes: Routes = [
  {
    path: '', component: ProductDetailsComponent, children: [
      { path: "", redirectTo: "product-item", pathMatch: "full" },
      { path: 'product-item', component: ProductItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
