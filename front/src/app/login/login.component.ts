import { Component, OnInit } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import  'rxjs/Rx';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
      private _http: Http,
  )
      { }
  username:string;
  password:string;
  message:any;
  ngOnInit() {
  }
onLogin(username,password){
  return this._http.post('http://localhost:1337/login', {username,password})
                   .map((res: Response)=> {this.message = res.text()})
                   .subscribe(result => console.log(result))
}
  

}
