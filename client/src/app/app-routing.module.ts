import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'electronics', loadChildren: () => import('./modules/electronics/electronics.module').then((m) => m.ElectronicsModule)},
  { path: 'products', loadChildren: () => import('./modules/product-details/product-details.module').then((m) => m.ProductDetailsModule)},
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'test', component: TestComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
