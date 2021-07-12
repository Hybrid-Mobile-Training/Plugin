import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { HttpClientModule } from '@angular/common/http';
import { CartModalPageModule } from './cart-modal/cart-modal.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,CartModalPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, BrowserModule,AngularFirestoreModule,AngularFireAuthModule,
    IonicModule.forRoot(),],
  providers: [SQLite,Camera,File,BarcodeScanner,BatteryStatus,StatusBar,
		SplashScreen,AngularFireAuthGuard,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})


export class AppModule {
  

}
