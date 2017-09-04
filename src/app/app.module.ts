import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { InjectableObject } from "../providers/base/injectableobject.base";
import { AuthenService } from './../providers/services/authen.service';
import { NotificationService } from "../providers/services/notification.service";
import { UploadService } from "../providers/services/upload.service";
import { UtilityService } from "../providers/services/utility.service";
import { CachingService } from '../providers/services/caching.service';
import { SignalrService } from '../providers/services/signalr.service';
import { DataService } from '../providers/services/data.service';
import { AuthGuard } from '../providers/guards/auth.guard';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataService,
    AuthenService,
    NotificationService,
    UtilityService,
    UploadService,
    CachingService,
    SignalrService,
    AuthGuard
  ]
})
export class AppModule { 
  constructor(private _injecttor: Injector) {
        InjectableObject(this._injecttor)
    }
}
