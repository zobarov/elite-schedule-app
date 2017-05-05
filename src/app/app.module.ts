import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { EliteApi } from '../shared/elite-api.service';

import { MyApp } from './app.component';

import { MyTeams } from '../pages/my-teams/my-teams';
import { Tournaments } from '../pages/tournaments/tournaments';
import { TeamDetail } from '../pages/team-detail/team-detail';
import { Teams } from '../pages/teams/teams';
import { Game } from '../pages/game/game';
import { TeamHome } from '../pages/team-home/team-home';
import { Standings } from '../pages/standings/standings';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    MyTeams,
    Tournaments,
    TeamDetail,
    Teams,
    Game,
    TeamHome,
    Standings

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeams,
    Tournaments,
    TeamDetail,
    Teams,
    Game,
    TeamHome,
    Standings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    EliteApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
