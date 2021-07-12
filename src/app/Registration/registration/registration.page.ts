import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  public username:string;
  public password:any;

  @ViewChild(AuthFormComponent)
  signupForm: AuthFormComponent;
constructor(private router : Router, private authService: AuthService) {
  
}
                 
  ngOnInit() {
  }
  
  // submit(fname,email,addr,mob,dob,username,password){
   
  //   localStorage.setItem("username",username);
  //   this.router.navigateByUrl('home');
  //   console.log("User registered successfully");
  // }

  async signupUser(credentials: UserCredential): Promise<void> {
    console.log("hii11");
    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.signup(
        credentials.email,
        credentials.password

      );
      console.log("hii");
      this.authService.userId = userCredential.user.uid;
      console.log("hii");
      await this.signupForm.hideLoading();
      this.router.navigateByUrl('home');
    } catch (error) {
      await this.signupForm.hideLoading();
      this.signupForm.handleError(error);
    }
  }
 
}

