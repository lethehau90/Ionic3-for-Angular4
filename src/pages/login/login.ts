import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthenService } from '../../providers/services/authen.service';
import { MessageContstants } from '../../providers/common/message.constants';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController,
    private auth: AuthenService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
    ) { }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  // public login() {
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed => {
  //     if (allowed) {        
  //       this.nav.setRoot('HomePage');
  //     } else {
  //       this.showError("Access Denied");
  //     }
  //   },
  //     error => {
  //       this.showError(error);
  //     });
  // }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials.email, this.registerCredentials.password).subscribe(data => {
      this.nav.setRoot('HomePage');
    }, error => {
      this.showError(MessageContstants.SYSTEM_ERROR_MSG)
    })
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}