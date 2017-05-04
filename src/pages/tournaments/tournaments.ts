import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';

import { MyTeams, Teams} from '../pages';
import { EliteApi } from '../../shared/shared';


@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class Tournaments {

  tournaments : any;

  constructor(private navCtrl: NavController, public navParams: NavParams,
              private loadCtrl: LoadingController,
              private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tournaments 2');

    let loader = this.loadCtrl.create({
      content: 'Getting tournaments...'
      // spinner: 'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    })



  }

  itemTapped($event, tourney) {
    this.navCtrl.push(Teams, tourney);
  }

}
