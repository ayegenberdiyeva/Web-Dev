import { Injectable } from '@angular/core';
import { ProductList } from '../interface/product-list.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  protected productList: ProductList[] = [
    { id: 1, name: 'phone', imageUrl: 'assets/images/gopro.jpg' },
    {
      id: 2,
      name: 'laptop',
      imageUrl: 'assets/images/gopro.jpg',
    },
    {
      id: 3,
      name: 'tv',
      imageUrl: 'assets/images/gopro.jpg',
    },
    {
      id: 4,
      name: 'IOT',
      imageUrl: 'assets/images/gopro.jpg',
    },
  ];

  getAllCategories(): ProductList[] {
    return this.productList;
  }

  getCategoriesById(id: Number): ProductList | undefined {
    return this.productList.find((category) => category.id === id);
  }

  constructor() {}
}
