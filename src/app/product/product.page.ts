import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { UserProfile } from 'src/app/models/user';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
public userProfile: UserProfile;
croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

public imgdata: any;
private win: any = window;
public subscription: any; 
private header : any;
products: Observable<any[]>;

  @ViewChild('myfab', { read: ElementRef }) carBtn: ElementRef;
  cart = {};
  cartAnimation: Animation;

  public foodList: any[];
  public foodListBackup: any[];
 
  constructor(private productService: ProductService, private animationCtrl: AnimationController,
     private modalCtrl: ModalController,private camera: Camera, private router: Router,     
     private file: File,public actionSheetController: ActionSheetController,private profileService: ProfileService,
     ) {}
 
  ngOnInit() {

    this.products = this.productService.getProducts();
 
    // Listen to Cart changes
    this.productService.cart.subscribe(value => {
      this.cart = value;
    });

    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
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
    //event.stopPropagation();
    this.productService.addToCart(product.id);
    //this.cartAnimation.play();
  }
 
  removeFromCart(event, product) {
    //event.stopPropagation();
    this.productService.removeFromCart(product.id);
    //this.cartAnimation.play();
  }
 
  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage
    });
    await modal.present();
  }

  pickImage(sourceType) {
    console.log("inside camera ");
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(".. ",base64Image);
      this.imgdata= base64Image;
      this.imgdata= this.win.Ionic.WebView.convertFileSrc(imageData);

      this.profileService.updatePicture(this.imgdata);
    }, (err) => {
      // Handle error
      console.log(err);
    });
  }

  async selectImage() {
    console.log("inside select img");
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  prod_details() {
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
  
  myOrder(){
    this.router.navigateByUrl('my-orders');
  }

}
