import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private appService: AppService) { }

  navOpen: boolean = false; //need to change to false for default
  windowHeight: any;


  ngOnInit(): void {
    this.windowHeight = document.body.clientHeight;
  }


  handleSideNavOpenStart(){
    this.navOpen = true;
  }

  handleSideNavStateChange(navOpen: boolean){
    if(this.navOpen == true) {
      this.navOpen = navOpen;
    }
  }

}
