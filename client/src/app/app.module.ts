import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TestComponent } from './components/test/test.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { ProductsCenterComponent } from './components/products-center/products-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    GridListComponent,
    AuthenticationComponent,
    TestComponent,
    ProductsHomeComponent,
    ProductsCenterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
