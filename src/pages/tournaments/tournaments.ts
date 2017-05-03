import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyTeams, Teams} from '../pages'


@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class Tournaments {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tournaments');
  }

  itemTapped() {
    this.navCtrl.push(Teams);
  }

}
