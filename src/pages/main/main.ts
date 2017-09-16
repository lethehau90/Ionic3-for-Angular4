import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CatsPage } from '../cats/cats';
import { DogsPage } from '../dogs/dogs';

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


  constructor(public platform: Platform, public statusBar: StatusBar, public splashscreen: SplashScreen, 
    public navCtrl: NavController,
    public menuCtrl: MenuController,
     public navParams: NavParams) 
     {
        //this.initializeApp();
        this.rootPage = HomePage;
        this.homePage = HomePage;
        this.catsPage = CatsPage;
        this.dogsPage = DogsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();
    });
  }

}
