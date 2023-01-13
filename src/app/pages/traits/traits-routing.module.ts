import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraitsPage } from './traits.page';

const routes: Routes = [
  {
    path: '',
    component: TraitsPage
  },
  {
    path: 'trait',
    loadChildren: () => import('./trait/trait.module').then( m => m.TraitPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraitsPageRoutingModule {}
