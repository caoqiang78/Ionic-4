import { Product } from './../../product.model';
import { ProductsService } from './../../products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-organic-intermediates-detail',
  templateUrl: './organic-intermediates-detail.page.html',
  styleUrls: ['./organic-intermediates-detail.page.scss'],
})
export class OrganicIntermediatesDetailPage implements OnInit {
  currentIntermediate: Product;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('intermediatesID')) {
        this.navCtrl.navigateBack('/products/tabs/intermediates');
        return;
      }

      const intermediateID = paramMap.get('intermediatesID');
      this.currentIntermediate = this.productsService.getIntermediate(intermediateID);
    });
  }

}
