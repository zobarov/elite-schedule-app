import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHome } from '../pages';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class Game {
  game: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eliteApi: EliteApi ) {
      console.log("**** Navparams with game init:", this.navParams.data);
      this.game = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game');
    this.game = this.navParams.data;
  }


  teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHome, team);
  }

}
