import { Component, OnInit } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import  'rxjs/Rx';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
      private _http: Http,
      private router: Router
  )
      { }
  username:string;
  password:string;
  message:any;
  isAdmin:boolean;
  

  ngOnInit() {
  }
  
  onLogin(username,password){
  return this._http.post('http://localhost:1337/login', {username,password})
                   .map((res: Response)=> {
                     this.message = res.text()
                     this.isAdmin = res.json().isAdmin
                     
                    })
                   .subscribe(result => console.log(result))
                   
}
  

}
