import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  products;
  showViewAllButton = false;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    // this.appService.getProducts().subscribe((data) => {
      // this.products = data;
      // Convert data to an array if it's an object
    // if (data instanceof Object) {
    //   this.products = Object.values(data);
    // } else {
    //   this.products = data;
    // }

    // Slice the array to get the first 10 items
    // this.products = this.products.slice(0, 12);
    //   console.log(this.products);
    //   this.showViewAllButton = this.products.length > 6; // Adjust based on your layout
    // });


    this.appService.getMProducts().subscribe((data) => {
      console.log('mongo products', data);
      if (data instanceof Object) { 
        this.products = Object.values(data);
      } else {
        this.products = data;
      }
  

    })
  }

 
}
