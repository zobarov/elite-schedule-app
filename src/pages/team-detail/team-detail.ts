import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetail {

  team : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log("** navParams: " + this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetail');
  }

}
