import { AuthGuard } from './../../providers/guards/auth.guard';
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
    private loadingCtrl: LoadingController,
    private authGuard : AuthGuard) { }

  public createAccount() {
    this.nav.setRoot('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials.email, this.registerCredentials.password).subscribe(data => {
      this.authGuard.login();
      this.nav.setRoot('MainPage');
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