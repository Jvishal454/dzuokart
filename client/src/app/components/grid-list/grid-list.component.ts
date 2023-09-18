import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  src: string;
}


@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {
  tiles: Tile[] = [
    {src: 'assets/images/home-carousel/grid-1.jpg', cols: 3, rows: 1, color: '#BAE2D9'},
    {src: 'assets/images/shop/shop-2.png', cols: 1, rows: 2, color: '#BAE2D9'},
    {src: 'assets/images/shop/shop-4.png', cols: 1, rows: 1, color: '#EF1C74'},
    {src: 'assets/images/home-carousel/grid-1.jpg', cols: 2, rows: 1, color: '#F4634A'},
  ];

}
