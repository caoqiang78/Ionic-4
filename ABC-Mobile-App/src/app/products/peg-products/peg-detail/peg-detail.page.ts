import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Product } from './../../product.model';
import { ProductsService } from './../../products.service';

@Component({
  selector: 'app-peg-detail',
  templateUrl: './peg-detail.page.html',
  styleUrls: ['./peg-detail.page.scss'],
})
export class PegDetailPage implements OnInit {
  currentPeg: Product;

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('pegID')) {
        this.navCtrl.navigateBack('/products/tabs/peg-products');
        return;
      }
      const pegID = paramMap.get('pegID');
      this.currentPeg = this.productsService.getPeg(pegID);
    });
  }

}
