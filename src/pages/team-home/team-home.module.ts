import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamHome } from './team-home';

@NgModule({
  declarations: [
    TeamHome,
  ],
  imports: [
    IonicPageModule.forChild(TeamHome),
  ],
  exports: [
    TeamHome
  ]
})
export class TeamHomeModule {}
