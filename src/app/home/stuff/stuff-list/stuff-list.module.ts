import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuffListPageRoutingModule } from './stuff-list-routing.module';

import { StuffListPage } from './stuff-list.page';
import { StuffItemPage } from './stuff-item/stuff-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuffListPageRoutingModule
  ],
  declarations: [StuffListPage,StuffItemPage]
})
export class StuffListPageModule {}
