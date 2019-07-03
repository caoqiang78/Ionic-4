import { ProductsService } from './../../products.service';
import { Product } from './../../product.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-elisa-detail',
  templateUrl: './elisa-detail.page.html',
  styleUrls: ['./elisa-detail.page.scss'],
})
export class ElisaDetailPage implements OnInit {
  public currentElisa: Product;

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController,private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('elisaID')) {
        this.navCtrl.navigateBack('/products/tabs/elisa');
        return;
      }

      const currentElisaId = paramMap.get('elisaID');
      this.currentElisa = this.productsService.getElisa(currentElisaId);
    });
  }

}
