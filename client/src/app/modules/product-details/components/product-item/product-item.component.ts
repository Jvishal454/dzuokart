import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  productData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(x => {
      let selectedProduct = x;
      this.appService.getProductItem(selectedProduct['pid']).subscribe(data => {
        this.productData = data;
      });
    });
  }
}
