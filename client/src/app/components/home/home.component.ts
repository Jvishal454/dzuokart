import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  src: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  tiles: Tile[] = [
    {src: 'assets/images/home-carousel/grid-1.jpg', cols: 3, rows: 1, color: 'lightgreen'},
    {src: 'assets/images/home-carousel/grid-1.jpg', cols: 1, rows: 2, color: 'dodgerblue'},
    {src: 'assets/images/home-carousel/grid-1.jpg', cols: 1, rows: 1, color: '#EAC562'},
    {src: 'assets/images/home-carousel/grid-1.jpg', cols: 2, rows: 1, color: '#EF1C74'},
  ];

}
