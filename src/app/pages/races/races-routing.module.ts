import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesPage } from './races.page';

const routes: Routes = [
  {
    path: '',
    component: RacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacesPageRoutingModule {}
