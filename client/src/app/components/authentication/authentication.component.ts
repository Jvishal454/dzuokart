import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  isLoginVisible = true; // Initialize with login UI visible
  isSignUpVisible = false;
  hide = true;

  login: FormGroup;
  signup: FormGroup;

  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // login = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.registerIcons();

    this.login = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required],
    });

    this.signup = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // handling scrollabr overflow
  ngOnInit(): void {
    document.body.style.overflow = 'hidden'
  }

  //Remove style on destroy
  ngOnDestroy(): void {
    document.body.style.removeProperty('overflow')
  }
  

  registerIcons(){
    const icons = {
      'google': 'assets/images/login/google.svg',
      'facebook': 'assets/images/login/facebook.svg'
    }
    for (const [iconName, iconPath] of Object.entries(icons)) {
      this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
      );
      }
  }

  

  // Create methods to toggle the states
  showLogin() {
    this.isLoginVisible = true;
    this.isSignUpVisible = false;
  }

  showSignUp() {
    this.isSignUpVisible = true;
    this.isLoginVisible = false;
  }

  submitForm() {
    if (this.login.valid) {
      const username = this.login.get('username').value;
      const password = this.login.get('password').value;

      console.log('Username:', username);
      console.log('Password:', password);
    }
    else {
        this.openSnackBar('Please Fill in the Fields', 'close')
    }
  }

  signupForm(){
    if (this.signup.valid) {
      const fullname = this.signup.get('fullname').value;
      const email = this.signup.get('email').value;
      const password = this.signup.get('password').value;

      console.log('Username:', fullname);
      console.log('Email', email);
      console.log('Password:', password);
    }
    else {
        this.openSnackBar('Please Fill in the Signup Fields', 'close')
    }
  }
  
  // general snackbar 
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  loginGoogle(){
    this.openSnackBar('Google Login under construction', 'close');
  }

  loginFacebook(){
    this.openSnackBar('Facebook Login under construction', 'close');
  }

  // getFloatLabelValue(): FloatLabelType {
  //   return this.floatLabelControl.value || 'auto';
  // }
}