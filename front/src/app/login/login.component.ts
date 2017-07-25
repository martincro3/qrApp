import { Component, OnInit } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import  'rxjs/Rx';
import {Router} from '@angular/router';
import {TestService} from '../services/test.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private _http: Http,
      private router: Router,
      private testService: TestService
  )
      { }
  username:string;
  password:string;
  result:any;
  res:any;
  message1:any;
  
  
  

  ngOnInit() {
  }
  
  onLogin(){
      this.testService.Login(this.username,this.password)
        .subscribe(result =>  console.log(this.testService.message)
     
        )};
                   
}



