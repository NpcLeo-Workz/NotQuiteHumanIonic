import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUpdatelanguagePage } from './create-updatelanguage.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUpdatelanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUpdatelanguagePageRoutingModule {}
