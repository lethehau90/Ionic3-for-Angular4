import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggedInUser } from '../../providers/domain/loggedin.user';
import { AuthenService } from '../../providers/services/authen.service';
import { SystemConstants } from '../../providers/common/system.constants';
import * as $ from 'jquery'


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
  public user: LoggedInUser;
  public baseFolder: any;

  constructor(
    public _auth : AuthenService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ngOnInit(){
    this.baseFolder = SystemConstants.BASE_API;
    this.user = this._auth.getLoggedInUser(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  changeText(){
    $('#button').text('Clicked');
    $('#button').height('80px');
  }
  

}
