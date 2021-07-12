import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  public userProfile: UserProfile;
  constructor(private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController) { }

    ngOnInit() {
      this.profileService.getUserProfile().then(profile$ => {
        profile$.subscribe(userProfile => {
          this.userProfile = userProfile;
        });
      });
    }

  // save(fname,email,addr,mob,dob,username,password){
   
  //   this.router.navigateByUrl('my-account');
  //   console.log("User detailes edited & saved successfully");
  // }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Your name',
      inputs: [
        {
          type: 'text',
          name: 'fullName',
          placeholder: 'Your full name',
          value: this.userProfile.fullName
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updateName(data.fullName);
          }
        }
      ]
    });
    return await alert.present();
  }

  async updateAddress(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Your Address',
      inputs: [
        {
          type: 'text',
          name: 'fullAddress',
          placeholder: 'Your full Address',
          value: this.userProfile.fullAddress
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updateAddress(data.fullAddress);
          }
        }
      ]
    });
    return await alert.present();
  }

  async updatePhone(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Your PhoneNumber',
      inputs: [
        {
          type: 'tel',
          name: 'fullNumber',
          placeholder: 'Your PhoneNumber',
          value: this.userProfile.fullNumber,
          attributes: {
            //maxlength: 10
          }
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatePhone(data.fullNumber);
          }
        }
      ]
    });
    return await alert.present();
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
        { name: 'password', placeholder: 'Your password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          }
        }
      ]
    });
    return await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    return await alert.present();
  }
  
}
