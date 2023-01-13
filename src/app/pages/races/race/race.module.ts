import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacePageRoutingModule } from './race-routing.module';

import { RacePage } from './race.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacePageRoutingModule
  ],
  declarations: [RacePage]
})
export class RacePageModule {}
