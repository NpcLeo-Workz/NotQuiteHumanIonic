import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUpdateracePageRoutingModule } from './create-updaterace-routing.module';

import { CreateUpdateracePage } from './create-updaterace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUpdateracePageRoutingModule
  ],
  declarations: [CreateUpdateracePage]
})
export class CreateUpdateracePageModule {}
