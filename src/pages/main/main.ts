import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CatsPage } from '../cats/cats';
import { DogsPage } from '../dogs/dogs';
import { AuthGuard } from '../../providers/guards/auth.guard';
import { LoginPage } from '../login/login';
import { ListPage } from '../list/list';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  
  private rootPage;
  private homePage;
  private catsPage;
  private dogsPage;
  private listsPage


  constructor(public platform: Platform, public statusBar: StatusBar, public splashscreen: SplashScreen, 
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public _auth : AuthGuard,
     public navParams: NavParams) 
     {
        this.rootPage = HomePage;
        this.homePage = HomePage;
        this.catsPage = CatsPage;
        this.dogsPage = DogsPage;
        this.listsPage = ListPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }

  ionViewCanEnter() {
    if(!this._auth._isLoggedIn) this.navCtrl.push(LoginPage); 
  }


}
