import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  sidenav: MatSidenav;
  selectedProduct;

  constructor(private http: HttpClient) { }

  getProducts(){
    let url = `https://fakestoreapi.com/products`;
    return this.http.get(url);
  }

  getMProducts(){
    let url = `/api/data/getProducts`;
    return this.http.get(url);
  }

  getProductItem(data){
    let url = `/api/data/getproductitem?pid=${data}`;
    console.log('app service', data);
    return this.http.get(url);
  }

  signupUser(data) {
    let url = `/api/data/signup`;
    return this.http.post(url, data);
  }

  loginUSer(data){
    let url = `/api/data/login`;
    return this.http.post(url, data);
  }
}
