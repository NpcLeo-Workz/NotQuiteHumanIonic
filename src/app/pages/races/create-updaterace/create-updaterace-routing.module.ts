import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUpdateracePage } from './create-updaterace.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUpdateracePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUpdateracePageRoutingModule {}
