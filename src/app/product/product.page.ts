import { Router } from '@angular/router';
import { ProductServiceService } from '../providers/product-service.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { HeaderService } from '../providers/header.service';

import { CartService, Product } from './../services/cart.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Observable } from 'rxjs'
import { ProductService } from '../services/product.service';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
//   public imgdata: any;
//   private win: any = window;
//   public subscription: any; 
//   private header : any;

//   cart = [];
// 	products : Observable<any[]>;
// 	cartItemCount: BehaviorSubject<number>;

// 	@ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

//   constructor(private headerService : HeaderService,private batteryStatus:BatteryStatus, 
//     private barcodeScanner: BarcodeScanner,private camera: Camera,private router: Router, 
//     private productService: ProductServiceService, private cartService:CartService,
//      private modalCtrl:ModalController) { 
   
    
//     this.header = this.headerService.getHeader();
// }
  
//   // public products = [
//   //   {
//   //     "id": 1,
//   //     "name": "Furniture",
//   //     "description": "chair",
//   //     "avatar": "https://rukminim1.flixcart.com/image/612/612/kon887k0/office-study-chair/b/v/v/1-pp-polypropylene-dz-nett-0117-01pc-dzyn-furnitures-original-imag325pczg4dnuq.jpeg?q=70"
//   //   },
//   //   {
//   //     "id":2,
//   //     "name":"Grocery",
//   //     "description":"rice",
//   //     "avatar" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11Bg545DVJBZzVGgyKLTcwfnTq3VNB6CaBQ&usqp=CAU"
//   //   },
//   //   {
//   //     "id": 3,
//   //     "name": "Mobile",
//   //     "subtitle" : "POCO X3",
//   //     "description": "POCO X3 (Cobalt Blue, 64 GB)  (6 GB RAM)",
//   //     "avatar": "https://rukminim1.flixcart.com/image/312/312/kfbfr0w0/mobile/f/x/r/poco-x3-mzb07z2in-original-imafvt3hz54npsba.jpeg?q=70"
//   //  }
//   // ]

// ngOnInit() {
//   this.products = this.cartService.getProducts();
//   this.cart = this.cartService.getCart();
//   this.cartItemCount = this.cartService.getCartItemCount();
// }

// addToCart(product: Product) {
//   console.log(`add ${product.name} to cart`)
//   this.animateCSS('jello');
//   this.cartService.addProduct(product);
// }

// async openCart() {
//   this.animateCSS('bounceOutLeft', true);

//   const modal = await this.modalCtrl.create({
//     component: CartModalPage,
//     cssClass: 'cart-modal'
//   });
//   modal.onWillDismiss().then(() => {
//     this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
//     this.animateCSS('bounceInLeft');
//   });
//   modal.present();
// }

// 	// copied from animate.css github page: https://github.com/daneden/animate.css
// animateCSS(animationName, keepAnimated = false) {
//   const node = this.fab.nativeElement;
//   node.classList.add('animated', animationName);


//   function handleAnimationEnd() {
//     if (!keepAnimated) {
//       node.classList.remove('animated', animationName);
//     }
//     node.removeEventListener('animationend', handleAnimationEnd);
//   }
//   node.addEventListener('animationend', handleAnimationEnd);
// }

//  prod_details() {
//    this.productService.setProductData(this.products);
//    this.router.navigateByUrl('product-details');
//  }

//  home(){
//   this.router.navigateByUrl('product');
// }

// myAcc(){
//   this.router.navigateByUrl('my-account');
// }

// aboutUs(){
//   this.router.navigateByUrl('about-us');
// }

//  logout(){
//   this.router.navigateByUrl('home');
// }


//   //added camera
//   openCamera() {
//     const options: CameraOptions = {
//       quality: 100,
//       sourceType: this.camera.PictureSourceType.CAMERA,
//       destinationType: this.camera.DestinationType.FILE_URI,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     }
    
//     this.camera.getPicture(options).then((imageData) => {
//      // imageData is either a base64 encoded string or a file URI
//      // If it's base64 (DATA_URL):
//      let base64Image = 'data:image/jpeg;base64,' + imageData;
//      console.log(imageData);
//      this.imgdata=base64Image;
//      this.imgdata= this.win.Ionic.WebView.convertFileSrc(imageData);
//     }, (err) => {
//      // Handle error
//      console.log(err);
//     });
//   }

//   openGallery() {
//     const options: CameraOptions = {
//       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     }
//     this.camera.getPicture(options).then((imageData) => {
//       // imageData is either a base64 encoded string or a file URI
//       // If it's base64 (DATA_URL):
//       let base64Image = 'data:image/jpeg;base64,' + imageData;
//       this.imgdata=base64Image;
//      }, (err) => {
//       // Handle error
//       console.log(err);
//      });
//     }

//     scanBarcode() {
//       this.barcodeScanner.scan().then(barcodeData => {
//         console.log('Barcode data', barcodeData);
//        }).catch(err => {
//            console.log('Error', err);
//        });
//     }
  
// // watch change in battery status
// onBatteryStatus(){
// const subscription = this.batteryStatus.onChange().subscribe(status => {
//   console.log("Battery status is ::",status.level, status.isPlugged);
// });
// }

public imgdata: any;
private win: any = window;
public subscription: any; 
private header : any;
products: Observable<any[]>;

  @ViewChild('myfab', { read: ElementRef }) carBtn: ElementRef;
  cart = {};
  cartAnimation: Animation;
 
  constructor(private productService: ProductService, private animationCtrl: AnimationController,
     private modalCtrl: ModalController,private headerService : HeaderService,
     private batteryStatus:BatteryStatus, private barcodeScanner: BarcodeScanner,private camera: Camera,
     private router: Router,private cartService:CartService,
     ) {}
 
  ngOnInit() {
    this.products = this.productService.getProducts();
 
    // Listen to Cart changes
    this.productService.cart.subscribe(value => {
      this.cart = value;
    });
  }
 
  ngAfterViewInit() {
    // Setup an animation that we can reuse
    this.cartAnimation = this.animationCtrl.create('cart-animation');
    this.cartAnimation.addElement(this.carBtn.nativeElement)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 0.8, transform: 'scale(0.9)' },
      { offset: 1, transform: 'scale(1)' }
    ])
    .duration(300)
    .easing('ease-out');
  }
 
  addToCart(event, product) {
    event.stopPropagation();
    this.productService.addToCart(product.id);
    this.cartAnimation.play();
  }
 
  removeFromCart(event, product) {
    event.stopPropagation();
    this.productService.removeFromCart(product.id);
    this.cartAnimation.play();
  }
 
  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage
    });
    await modal.present();
  }

  prod_details() {
       //this.productService.setProductData(this.products);
       this.router.navigateByUrl('product-details');
  }
    
  home(){
      this.router.navigateByUrl('product');
  }
    
  myAcc(){
      this.router.navigateByUrl('my-account');
  }
    
  aboutUs(){
      this.router.navigateByUrl('about-us');
  }
    
  logout(){
      this.router.navigateByUrl('home');
  }
    

}
