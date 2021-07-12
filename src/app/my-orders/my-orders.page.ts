import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { take } from 'rxjs/operators';
import firebase from 'firebase/app';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  orders = [];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    // const cartItems = this.productService.cart.value;
 
    // this.productService.getOrders().pipe(take(1)).subscribe(allOrders => {
    //   this.orders = allOrders.filter(p => cartItems[p.id]).map(product => {
    //     return { ...product, count: cartItems[product.id] };
    //   });
    // });
    this.productService.getOrders();
   
  }

  

}
