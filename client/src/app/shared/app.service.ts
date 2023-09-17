import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  sidenav: MatSidenav;

  constructor(private http: HttpClient) { }
}
