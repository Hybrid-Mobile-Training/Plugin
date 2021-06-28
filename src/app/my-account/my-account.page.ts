import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  save(fname,email,addr,mob,dob,username,password){
   
    this.router.navigateByUrl('my-account');
    console.log("User detailes edited & saved successfully");
  }

}
