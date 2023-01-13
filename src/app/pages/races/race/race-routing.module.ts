import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacePage } from './race.page';

const routes: Routes = [
  {
    path: '',
    component: RacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacePageRoutingModule {}
