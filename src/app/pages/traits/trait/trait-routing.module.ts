import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraitPage } from './trait.page';

const routes: Routes = [
  {
    path: '',
    component: TraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraitPageRoutingModule {}
