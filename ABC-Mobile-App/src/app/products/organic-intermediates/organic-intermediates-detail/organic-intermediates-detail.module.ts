import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrganicIntermediatesDetailPage } from './organic-intermediates-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OrganicIntermediatesDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrganicIntermediatesDetailPage]
})
export class OrganicIntermediatesDetailPageModule {}
