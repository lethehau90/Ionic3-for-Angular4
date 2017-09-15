import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
