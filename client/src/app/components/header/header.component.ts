import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppService } from 'src/app/shared/app.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { SidenavService } from 'src/app/shared/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn;
  userDetails;

  constructor(
    private appService: AppService,
    private sidenavService: SidenavService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    console.log('header initialized ')
    this.authService.loggedIn$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });

    this.authService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log('head',this.userDetails)
    });
    // this.loggedIn = this.authService.getToken();
    
  }

  toggleMenu(){
    this.sidenavService.toggleSidenav();
  }

  logout(){
    this.authService.logout();
    window.location.reload();
  }
 
  // toggleMenu(){
  //   this.appService.sidenav.toggle()
  // }
  // toggleMenu() {
  //   console.log('appService:', this.appService);
  //   console.log('sidenav:', this.appService.sidenav);
  //   if (this.appService.sidenav) {
  //     this.appService.sidenav.toggle();
  //   } else {
  //     console.error('sidenav is undefined');
  //   }
  // }
  

}


