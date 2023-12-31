import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  sidenav: MatSidenav;
  selectedProduct;
  svUserData;

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
    // console.log('app service', data);
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

  userDetails(email){
    let url = `/api/data/user-detail?email=${email}`
    return this.http.get(url); 
  }

  addUserAddress(address, email){
    const encodedAddress = encodeURIComponent(address)
    const encodedEmail = encodeURIComponent(email)
    // let url = (`/api/data/add-user-address?address=${address}`).toString(); // we can also do it using toString() such that we get special characters value.
    let url = `/api/data/add-user-address?address=${encodedAddress}&email=${encodedEmail}`;
    return this.http.get(url); 
  }

  getUserAddress(){
    let url = `/api/data/get-user-address`;
    return this.http.get(url); 
  }

  wishList(user, data) {
    console.log(user, data)
    const payload = {user, data}
    let url = `/api/data/add-wishlist`;
    return this.http.post(url, payload);
  }

  getWishlist(user){
    let url = `/api/data/get-wishlist?user=${user}`;
    return this.http.get(url);
  }

}
