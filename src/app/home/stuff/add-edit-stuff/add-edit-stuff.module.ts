import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditStuffPageRoutingModule } from './add-edit-stuff-routing.module';

import { AddEditStuffPage } from './add-edit-stuff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditStuffPageRoutingModule
  ],
  declarations: [AddEditStuffPage]
})
export class AddEditStuffPageModule {}
