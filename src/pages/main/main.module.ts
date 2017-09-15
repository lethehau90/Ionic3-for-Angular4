import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { HomePageModule } from '../home/home.module';
import { CatsPageModule } from '../cats/cats.module';
import { DogsPageModule } from '../dogs/dogs.module';

@NgModule({
  declarations: [
    MainPage
  ],
  imports: [
    HomePageModule,
    CatsPageModule,
    DogsPageModule,
    IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
