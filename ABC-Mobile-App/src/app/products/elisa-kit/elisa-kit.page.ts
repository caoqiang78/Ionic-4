import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-elisa-kit',
  templateUrl: './elisa-kit.page.html',
  styleUrls: ['./elisa-kit.page.scss'],
})
export class ElisaKitPage implements OnInit {
  elisas: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.elisas = this.productsService.elisa;
  }

}
