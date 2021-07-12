import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  @ViewChild(AuthFormComponent)
  resetPasswordForm: AuthFormComponent;

  constructor(private router: Router,private authService: AuthService, private alertCtrl: AlertController,private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('home'); 
  }

  // async checkout() {
  //   console.log("check out");
  //   this.router.navigateByUrl('home');
  //   // // Create an order
  //   // await this.afs.collection('orders').add(this.cart.value);
   
  //   // // Clear old cart
  //   // this.afs.collection('carts').doc(this.cartKey).set({
  //   //   lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
  //   // });
  // }

  async resetPassword(credentials: UserCredential): Promise<void> {
    console.log("demo");
    try {
      await this.authService.resetPassword(credentials.email);
      await this.resetPasswordForm.hideLoading();
      const alert = await this.alertCtrl.create({
        message: 'Check your inbox for the password reset link',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              this.router.navigateByUrl('login');
            }
          }
        ]
      });
      console.log("demo");
      await alert.present();
    } catch (error) {
      await this.resetPasswordForm.hideLoading();
      this.resetPasswordForm.handleError(error);
    }
  }
  // async send() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Email Sent',
  //     message: 'Password recovery mail sent on entered email id, Please check and reset password.',
  //     buttons: [
  //       {
  //         text: 'Continue Login',
  //         handler: () => {
  //           this.checkout();
  //         }
  //     },]
  //   });
  //   await alert.present();
  // }
}
