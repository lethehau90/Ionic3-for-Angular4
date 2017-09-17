import { Component } from '@angular/core';
import {NavController} from "ionic-angular/index";
import { AuthGuard } from '../../providers/guards/auth.guard';
import { LoginPage } from '../login/login';

@Component({
  selector: 'lsd-logout',
  template: '<button ion-button small color="light" (click)="logout()">Logout</button>'
})
export class LogoutPage {
  username: string;

  constructor(private _auth: AuthGuard, private navController: NavController) {}

  logout() {
    this._auth.logout();
    this.navController.push(LoginPage);
  }
}
