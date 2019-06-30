import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElisaKitPage } from './elisa-kit.page';

const routes: Routes = [
  {
    path: '',
    component: ElisaKitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElisaKitPage]
})
export class ElisaKitPageModule {}
