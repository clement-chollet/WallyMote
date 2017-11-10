import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { OptionPage } from '../pages/options/options';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OnOffPage } from '../pages/onoff/onoff';
import { Telecommande } from '../pages/telecommande/telecommande';
import { ParamScreen } from '../pages/paramscreen/paramscreen';
import { ClearPage } from '../pages/clear/clear'; 
import { WallTelecommandePage } from '../pages/wallTelecommande/wallTelecommande';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    OptionPage,
    HomePage,
    TabsPage,
    OnOffPage,
    Telecommande,
    ParamScreen,
    ClearPage, 
    WallTelecommandePage,   
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    OptionPage,
    HomePage,
    TabsPage,
    OnOffPage,
    Telecommande,
    ParamScreen,
    ClearPage,
    WallTelecommandePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
