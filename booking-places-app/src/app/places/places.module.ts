import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRountingModule } from './places-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesRountingModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
