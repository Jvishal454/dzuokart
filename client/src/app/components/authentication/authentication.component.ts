import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  isLoginVisible = true; // Initialize with login UI visible
  isSignUpVisible = false;

  // Create methods to toggle the states
  showLogin() {
    this.isLoginVisible = true;
    this.isSignUpVisible = false;
  }

  showSignUp() {
    this.isSignUpVisible = true;
    this.isLoginVisible = false;
  }

}
