import { AuthGuard } from './../../providers/guards/auth.guard';
import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    public authGuard: AuthGuard) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewCanEnter() {
    return this.authGuard.authGuard();
  }

  logoutUser() {
    //this.navCtrl.setRoot("LoginPage");
    //this.appCtrl.getRootNav().push(LoginPage);
    this.navCtrl.push(LoginPage);
    this.authGuard.logout();
  }

}
