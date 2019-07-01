import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-organic-intermediates',
  templateUrl: './organic-intermediates.page.html',
  styleUrls: ['./organic-intermediates.page.scss'],
})
export class OrganicIntermediatesPage implements OnInit {
  intermediates: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.intermediates = this.productsService.intermediates;
  }

}
