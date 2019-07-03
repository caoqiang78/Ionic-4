import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PegDetailPage } from './peg-detail.page';
import { PegModalComponent } from './peg-modal/peg-modal.component';

const routes: Routes = [
  {
    path: '',
    component: PegDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PegDetailPage, PegModalComponent],
  entryComponents: [PegModalComponent]
})
export class PegDetailPageModule {}
