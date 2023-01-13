import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraitsPageRoutingModule } from './traits-routing.module';

import { TraitsPage } from './traits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraitsPageRoutingModule
  ],
  declarations: [TraitsPage]
})
export class TraitsPageModule {}
