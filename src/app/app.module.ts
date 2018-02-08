import { ProcessThreeComponent } from './../components/process-three/process-three';
import { ProcessTwoComponent } from './../components/process-two/process-two';
import { ProcessOneComponent } from './../components/process-one/process-one';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Test1Page } from '../pages/test1/test1';
import { Test2Page } from '../pages/test2/test2';
import { ComponentsModule } from '../components/components.module';
import { ProcessFourComponent } from '../components/process-four/process-four';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Test1Page,
    Test2Page,
    ProcessOneComponent,
    ProcessTwoComponent,
    ProcessThreeComponent,
    ProcessFourComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Test1Page,
    Test2Page,
    ProcessOneComponent,
    ProcessTwoComponent,
    ProcessThreeComponent,
    ProcessFourComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
