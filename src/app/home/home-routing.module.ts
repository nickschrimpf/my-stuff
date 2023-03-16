import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'stuff-list',
        loadChildren: () => import('./stuff/stuff-list/stuff-list.module').then( m => m.StuffListPageModule)
      },
      {
        path: 'add-stuff',
        loadChildren: () => import('./stuff/add-edit-stuff/add-edit-stuff.module').then( m => m.AddEditStuffPageModule)
      },
      {
        path: 'edit-stuff/:id',
        loadChildren: () => import('./stuff/add-edit-stuff/add-edit-stuff.module').then( m => m.AddEditStuffPageModule)
      },
    ]
  },
  {
    path: 'add-edit-stuff',
    loadChildren: () => import('./stuff/add-edit-stuff/add-edit-stuff.module').then( m => m.AddEditStuffPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}


