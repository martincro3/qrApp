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
    constructor(
        private http: Http,
        private router: Router
    ){}
}