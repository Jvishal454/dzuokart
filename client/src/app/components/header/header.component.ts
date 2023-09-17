import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppService } from 'src/app/shared/app.service';
import { SidenavService } from 'src/app/shared/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private appService: AppService,
    private sidenavService: SidenavService
    ) { }

  ngOnInit(): void {
    
  }

  toggleMenu(){
    this.sidenavService.toggleSidenav();
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


