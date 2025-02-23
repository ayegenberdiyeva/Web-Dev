import { Component, inject, Input } from '@angular/core';
import { ProductList } from '../interface/product-list.interface';
import { ProductListService } from './product-list.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../interface/products.interface';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() productList!: ProductList;
}
