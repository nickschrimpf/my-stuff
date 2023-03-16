import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditStuffPage } from './add-edit-stuff.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditStuffPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditStuffPageRoutingModule {}
