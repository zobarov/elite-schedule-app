import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tournaments } from './tournaments';

@NgModule({
  declarations: [
    Tournaments,
  ],
  imports: [
    IonicPageModule.forChild(Tournaments),
  ],
  exports: [
    Tournaments
  ]
})
export class TournamentsModule {}
