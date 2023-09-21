import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicsComponent } from './electronics.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { CellPhonesComponent } from './components/cell-phones/cell-phones.component';


@NgModule({
  declarations: [
    ElectronicsComponent,
    LaptopsComponent,
    CellPhonesComponent,
  ],
  imports: [
    CommonModule,
    ElectronicsRoutingModule
  ]
})
export class ElectronicsModule { }
