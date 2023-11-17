import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import * as jwt_decode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import { AppService } from '../app.service';


interface DecodedToken {
  userId: string; 
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private appService: AppService) { }

  private loggedInSubject = new BehaviorSubject<boolean>(this.getToken());
  loggedIn$ = this.loggedInSubject.asObservable();
  setLoginStatus(loggedIn: boolean) {
    this.loggedInSubject.next(loggedIn);
  }

  private userDetailsSubject = new BehaviorSubject<any>(null);
  userDetails$ = this.userDetailsSubject.asObservable();
  // Set user details received from the GET request
  setUserDetails(userData: any) {
  this.userDetailsSubject.next(userData);
}


  getToken() {
    const storedToken = localStorage.getItem('token');
    if(storedToken){
      const decodedToken = jwtDecode(storedToken) as DecodedToken;
      console.log('decoded token', decodedToken)
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
      const currentTime = Date.now();  
      if(currentTime < expirationTime){
        // token is still valid
        console.log('Token is still valid')
        this.appService.userDetails(decodedToken.userId).subscribe((userData) => {
          // set the userdetail in subject behavior for other coimponents to susbcribe and use
          this.setUserDetails(userData);

          // setting userdata in localStorage
          localStorage.setItem('user_data', JSON.stringify(userData));

          this.appService.svUserData = userData;
          // console.log(this.appService.svUserData);
          // this.userDetailsSubject.next(userData); // <- can do this to directly set the value but doing the other way to maintain structure
        })
        return true;
      }
      else{
        // Token has expired, remove it and return null
        console.log('Token is expired')
        this.removeToken();
        return false;
      }
    }
    else{
      return false
    }
    
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    console.log('Token was set to -', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.removeToken();
  }
}
