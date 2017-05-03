import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTeams } from './my-teams';

@NgModule({
  declarations: [
    MyTeams,
  ],
  imports: [
    IonicPageModule.forChild(MyTeams),
  ],
  exports: [
    MyTeams
  ]
})
export class MyTeamsModule {}
