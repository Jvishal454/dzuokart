import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  sidenav: MatSidenav;

  constructor(private http: HttpClient) { }

  getProducts(){
    let url = `https://fakestoreapi.com/products`;
    return this.http.get(url);
  }

  getMProducts(){
    let url = `/api/data/getProducts`;
    return this.http.get(url);
  }
}
