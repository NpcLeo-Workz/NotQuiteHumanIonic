import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraitPageRoutingModule } from './trait-routing.module';

import { TraitPage } from './trait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraitPageRoutingModule
  ],
  declarations: [TraitPage]
})
export class TraitPageModule {}
