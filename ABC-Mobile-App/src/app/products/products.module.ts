import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
