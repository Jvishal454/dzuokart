import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userProfile: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  canActivate(): boolean {
    if (this.authService.getToken()) {
      return true;
    } 
    else{
      // this.authService.logout()
      this.openSnackBar("Please Login First","Close") 
      // Navigate to the login page or any other page for authentication
      this.router.navigate(['/authentication']);
      return false;
    }
    
  }

  getUserDetails(){
    const storedToken = localStorage.getItem('token');
    const decodedToken = jwtDecode(storedToken);
    return decodedToken;
  }


  // isAuthenticated(): boolean {
  //   this.userProfile = sessionStorage.getItem("loggedInUser");
  //   console.log('user authenticated - ',this.userProfile !== null)

  //   return this.userProfile !== null;
  // }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
  
}