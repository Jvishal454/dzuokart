import { Injectable } from '@angular/core';
// import * as jwt_decode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string | null {
    const storedToken = localStorage.getItem('token');
    if(storedToken){
      const decodedToken = jwtDecode(storedToken);
      // console.log('decoded',decodedToken)
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
      // console.log('expiration', expirationTime)
      // const oneHourTimeLimit = 60000 // 60 * 60 * 1000; // 1 hour in milliseconds

      const currentTime = Date.now();
      // const oneMinuteTimeLimit = 60000; // 1 minute in milliseconds
      // console.log('current time',currentTime)
      if(currentTime < expirationTime){
        // token is still valid
        console.log('Token is still valid')
        return storedToken
      }
      else{
        // Token has expired, remove it and return null
        console.log('Token is expired')
        this.removeToken();
        return 'false';
      }
    }
    else{
      return 'false'
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
