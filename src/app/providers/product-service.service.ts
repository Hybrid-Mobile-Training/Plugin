import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
private productdata:any;
  constructor() {
   }

  setProductData(products){
   this.productdata=products; 
  }

  getProductData(){
  return this.productdata;  
  }

  getCurrentDate(){
    return new Date();
  }
}
