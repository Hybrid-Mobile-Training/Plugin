import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../providers/product-service.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public header:any;
  public username:String;
  public password:any;
  public database: SQLiteObject;

  constructor(private router : Router,private sqlite: SQLite) {
//     this.sqlite.create({name: "myDatabase.db", location: "default"}).then((db : SQLiteObject) => {
//       this.database = db;
//       this.createTables();
//   }, (error) => {
//       console.log("ERROR: ", error);
// }); 

  }

  ngOnInit() {
		
	}

  submit(user, pass){
    this.router.navigateByUrl('product'); 
    console.log("Hello user");
  }

  register(){
    this.router.navigateByUrl('registration'); 
  }

  forgotPass(){
    this.router.navigateByUrl('forgot-pass'); 
  }

  // async createTables(){
  //   try {
  //       await this.database.executeSql(`CREATE TABLE IF NOT EXISTS Family (id INTEGER PRIMARY KEY,name TEXT NOT NULL)`,[]);
  //       console.log("Table created successfully !");
  //   }catch(e){
  //       console.log("Error !", e);
  //   }
  // }


}
 