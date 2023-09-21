import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { CellPhonesComponent } from './components/cell-phones/cell-phones.component';

const routes: Routes = [
  {
    path: '', component: ElectronicsComponent, children: [
      { path: 'laptops', component: LaptopsComponent},
      { path: 'cell-phones', component: CellPhonesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
