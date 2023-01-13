import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesPage } from './races.page';

const routes: Routes = [
  {
    path: '',
    component: RacesPage
  },
  {
    path: 'race',
    loadChildren: () => import('./race/race.module').then( m => m.RacePageModule)
  },  {
    path: 'create-updaterace',
    loadChildren: () => import('./create-updaterace/create-updaterace.module').then( m => m.CreateUpdateracePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacesPageRoutingModule {}
