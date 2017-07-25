import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { AdminComponent } from "app/admin/admin.component";
import { UserComponent } from "app/user/user.component";
import { LoginComponent } from 'app/login/login.component';

const appRute: Routes=[
    {path:'', component:LoginComponent},
    {path:'admin', component:AdminComponent},
    {path:'user', component:UserComponent}
]

export const routing = RouterModule.forRoot(appRute, {useHash:true});