import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TestComponent } from './components/test/test.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'electronics', loadChildren: () => import('./modules/electronics/electronics.module').then((m) => m.ElectronicsModule)},
  { path: 'products', loadChildren: () => import('./modules/product-details/product-details.module').then((m) => m.ProductDetailsModule), canActivate: [AuthGuard]},
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then((m) => m.AccountModule), canActivate: [AuthGuard]},
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'test', component: TestComponent },
  { path: 'cart', component: CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
