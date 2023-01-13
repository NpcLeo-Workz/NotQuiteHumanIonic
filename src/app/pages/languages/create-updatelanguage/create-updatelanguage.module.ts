import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUpdatelanguagePageRoutingModule } from './create-updatelanguage-routing.module';

import { CreateUpdatelanguagePage } from './create-updatelanguage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUpdatelanguagePageRoutingModule
  ],
  declarations: [CreateUpdatelanguagePage]
})
export class CreateUpdatelanguagePageModule {}
