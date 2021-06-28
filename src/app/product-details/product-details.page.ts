import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../providers/product-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  private data:any;
  constructor(private productService: ProductServiceService) { 
    
    this.data=this.productService.getProductData();
    console.log(this.data);
  }
  
    ngOnInit() {
  }

}
