import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../interface/products.interface';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-category',
  imports: [ProductsComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  products: Product[] = [];
  productService: ProductsService = inject(ProductsService);
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const categoryId = Number(params.get('categoryid')); // Получаем categoryid из URL
      this.loadProducts(categoryId);
    });
  }

  loadProducts(categoryId: number) {
    this.products = this.productService
      .getAllProducts()
      .filter((product) => product.categoryid === categoryId)
      .map((product) => ({
        ...product,
        likes:
          Number(localStorage.getItem(`likes_${product.id}`)) || product.likes,
      }));
  }

  removeProduct(productId: number) {
    this.products = this.products.filter((product) => product.id !== productId);
    localStorage.removeItem(`liked_${productId}`);
    localStorage.removeItem(`likes_${productId}`);
  }

  updateLikes({
    id,
    likes,
    isLiked,
  }: {
    id: number;
    likes: number;
    isLiked: boolean;
  }) {
    const product = this.products.find((p) => p.id === id);
    if (!product) return;

    product.likes = likes;
    localStorage.setItem(`likes_${id}`, likes.toString());
    localStorage.setItem(`liked_${id}`, isLiked.toString());
  }
}
