import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassPageRoutingModule } from './forgot-pass-routing.module';

import { ForgotPassPage } from './forgot-pass.page';
import { AuthModule } from 'src/app/shared-modules/auth.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassPageRoutingModule,
    AuthModule
  ],
  declarations: [ForgotPassPage]
})
export class ForgotPassPageModule {}
