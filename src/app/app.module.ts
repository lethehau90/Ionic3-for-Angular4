import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';
import { MainPageModule } from '../pages/main/main.module';
import { AuthenService } from '../providers/services/authen.service';
import { DataService } from '../providers/services/data.service';
import { NotificationService } from '../providers/services/notification.service';
import { UtilityService } from '../providers/services/utility.service';
import { UploadService } from '../providers/services/upload.service';
import { CachingService } from '../providers/services/caching.service';
import { SignalrService } from '../providers/services/signalr.service';
import { AuthGuard } from '../providers/guards/auth.guard';



@NgModule({
  declarations: [
    MyApp,LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MainPageModule,
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
  constructor() {
       
    }
}
