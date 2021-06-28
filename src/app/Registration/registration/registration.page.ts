import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  public username:string;
  public password:any;
  
constructor(private router : Router) {
  
}
                 
  ngOnInit() {
  }
  
  submit(fname,email,addr,mob,dob,username,password){
   
    localStorage.setItem("username",username);
    this.router.navigateByUrl('home');
    console.log("User registered successfully");
  }
 
}

