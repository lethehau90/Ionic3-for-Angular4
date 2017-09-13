import { Injectable } from '@angular/core';
import { SystemConstants } from '../common/system.constants';
//import { UrlConstants } from '../common/url.constants';

@Injectable()
export class AuthGuard  {
    private isLoggedIn = false;
    constructor() {

    }
    login(){
        if (localStorage.getItem(SystemConstants.CURRENT_USER)) {
             this.isLoggedIn = true;
        }
        else {
             this.isLoggedIn = false;
        }
       
    }

    logout(){
        localStorage.removeItem(SystemConstants.CURRENT_USER)
        this.isLoggedIn = false;
    } 

    authGuard() : boolean{
        if (localStorage.getItem(SystemConstants.CURRENT_USER)) {
            return this.isLoggedIn = true;
        }
        else {
           return  this.isLoggedIn = false;
        }
    }
   
}