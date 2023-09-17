import { Component, ElementRef, HostListener, OnInit, ViewChild, } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, window } from 'rxjs';
import { AppService } from 'src/app/shared/app.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { SidenavService } from 'src/app/shared/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav; 

  constructor(
    private appService: AppService,
    private sidenavService: SidenavService
    ) { }

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

  // Create a getter for the Sidenav state
  get isSidenavOpen(): boolean {
    return this.sidenavService.getSidenavState();
  }

}
