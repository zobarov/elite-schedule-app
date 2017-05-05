import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as _ from 'lodash';
import { TeamHome } from '../pages';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class Teams {
  private allTeams: any;
  private allTeamDivisions: any;

  teams = [];

  constructor(public navCtrl: NavController,
              public loadCtrl: LoadingController,
              public navParams: NavParams,
              private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadCtrl.create( {
      content: "Getting data...",

    });

    loader.present().then(() => {

      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
      this.allTeamDivisions =
      _.chain(data.teams)
      .groupBy('division')
      .toPairs()
      .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
      .value();

      this.teams = this.allTeamDivisions;
      console.log('division teams:', this.allTeamDivisions);
          loader.dismiss();
    });



    });


  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHome, team);
  }

}
