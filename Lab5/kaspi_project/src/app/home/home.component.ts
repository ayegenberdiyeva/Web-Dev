import { Component, inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../interface/products.interface';
import { ProductsService } from '../products/products.service';
import { ProductList } from '../interface/product-list.interface';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  productList: ProductList[] = [];

  productListService: ProductListService = inject(ProductListService);

  constructor() {
    this.productList = this.productListService.getAllCategories();
  }
}
