import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Tournaments, TeamHome } from '../pages'
import {EliteApi} from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeams {
  favourites = [
    {
      team: {id:6182, name: "HC Elite", coach: "Fillipp"},
      tournamentId: '3dd50aaf-6b03-4497-b074-d81703f07ee8',
      tournamentName: 'Cager Classic'
    }

  ];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadCtrl: LoadingController,
              private eliteApi: EliteApi) {
  }

  ionViewLoaded() {
    console.log('ionViewDidLoad MyTeams');
  }

  goToTournaments() {
    this.navCtrl.push(Tournaments);
  }

  favoriteTapped($event, favourite) {
let loader = this.loadCtrl.create({
  content: 'Getting data...',
  dismissOnPageChange: true
});
loader.present();
this.eliteApi.getTournamentData(favourite.tournamentId)
.subscribe(t => this.navCtrl.push(TeamHome, favourite.team));
  }

}
