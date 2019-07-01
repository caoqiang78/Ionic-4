import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-peg-products',
  templateUrl: './peg-products.page.html',
  styleUrls: ['./peg-products.page.scss'],
})
export class PEGProductsPage implements OnInit {
  pegs: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.pegs = this.productsService.peg;
  }

}
