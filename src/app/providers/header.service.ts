import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public header: any;
  constructor(private http:HttpClient) { }

  getHeader(){
    console.log("inside get header service");
    return this.header="Hello Kirti!!";
  }
}
