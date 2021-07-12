import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../providers/product-service.service';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import firebase from 'firebase/app';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public header:any;
  public username:String;
  public password:any;

  @ViewChild(AuthFormComponent) loginForm: AuthFormComponent;

  constructor(private router : Router,private authService: AuthService) {


  }

  ngOnInit() {
		
	}

  // submit(user, pass){
  //   this.router.navigateByUrl('product'); 
  //   console.log("Hello user");
  // }

  async loginUser(credentials: UserCredential): Promise<void> {
    console.log("hii");
    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.login(
        credentials.email,
        credentials.password
      );
      console.log("hii1");
      this.authService.userId = userCredential.user.uid;
      await this.loginForm.hideLoading();
      console.log("hii2");
      this.router.navigateByUrl('product');
    } catch (error) {
      await this.loginForm.hideLoading();
      this.loginForm.handleError(error);
    }
  }

  register(){
    this.router.navigateByUrl('registration'); 
  }

  forgotPass(){
    this.router.navigateByUrl('forgot-pass'); 
  }



}
 