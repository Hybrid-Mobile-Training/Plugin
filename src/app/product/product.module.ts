import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';

import { CartModalPageModule } from '../cart-modal/cart-modal.module';
//import { Calendar } from '@ionic-native/calendar/ngx';

//import { Keyboard } from '@ionic-native/keyboard/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    CartModalPageModule
    //Calendar
    //Keyboard
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
