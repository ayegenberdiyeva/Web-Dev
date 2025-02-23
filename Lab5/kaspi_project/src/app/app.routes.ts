import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  {
    path: 'products/:categoryid',
    component: CategoryComponent,
    title: 'Products Page',
  },
];
