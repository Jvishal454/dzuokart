import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    
  }

 
  toggleMenu(){
    this.appService.sidenav.toggle()
  }
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


