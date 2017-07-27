import {Injectable} from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';

@Injectable()

export class TestService {
    isAdmin:boolean;
    message:any;
    isLogged:boolean;
    constructor(
        private http: Http,
        private router: Router
    ){}

    Login(username,password){
        return this.http.post('http://localhost:1337/login', {username,password})
                   .map((res: Response)=> {
                        //console.log(res);
                        this.message = res.text()
                        this.isAdmin = res.json().isAdmin
                        this.isLogged = res.json().isLogged
                        console.log(this.isAdmin)
                        if (this.isAdmin===true){
                            this.router.navigate(['/admin'])
                        }
                        else{
                            this.router.navigate(['/user'])
                        }
                    })
    }
}