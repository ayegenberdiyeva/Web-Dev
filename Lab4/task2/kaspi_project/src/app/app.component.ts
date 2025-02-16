import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Product } from './interface/products.interface';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kaspi_project';
  products: Product[] = [
    {
      id: 1,
      imageUrl: '/assets/images/ip16.jpeg',
      name: 'iPhone 16 Pro Max',
      description: 'Apple iPhone 14 Pro Max 256GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-105845154/',
    },
    {
      id: 2,
      imageUrl: '/assets/images/s25ultra.jpeg',
      name: 'Samsung Galaxy S25 Ultra',
      description: 'Samsung Galaxy S23 Ultra 512GB',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-512gb-106362084/',
    },
    {
      id: 3,
      imageUrl: '/assets/images/xiaomi.jpg',
      name: 'Xiaomi Redmi Note 12',
      description: 'Xiaomi Redmi Note 12 256GB',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-256gb-106882354/',
    },
    {
      id: 4,
      imageUrl: 'assets/images/macbook.jpg',
      name: 'MacBook Air M2',
      description: 'Apple MacBook Air M2 16GB/512GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-16gb-512gb-107485114/',
    },
    {
      id: 5,
      imageUrl: 'assets/images/asusrog.jpg',
      name: 'ASUS ROG Zephyrus G14',
      description: 'ASUS ROG Zephyrus G14 Ryzen 9/32GB/1TB',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ryzen-9-32gb-1tb-107865148/',
    },
    {
      id: 6,
      imageUrl: 'assets/images/ps5.jpg',
      name: 'Sony PlayStation 5',
      description: 'Sony PlayStation 5 825GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-825gb-107256187/',
    },
    {
      id: 7,
      imageUrl: 'assets/images/samsungqled.jpg',
      name: 'Samsung QLED 4K',
      description: 'Samsung 55" QLED 4K Smart TV',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-55-qled-4k-107993124/',
    },
    {
      id: 8,
      imageUrl: 'assets/images/dyson.jpg',
      name: 'Dyson V15 Detect',
      description: 'Dyson V15 Detect Cordless Vacuum',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-cordless-108321554/',
    },
    {
      id: 9,
      imageUrl: 'assets/images/applewatch.jpeg',
      name: 'Apple Watch Series 8',
      description: 'Apple Watch Series 8 45mm GPS',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45mm-gps-107982514/',
    },
    {
      id: 10,
      imageUrl: 'assets/images/gopro.jpg',
      name: 'GoPro Hero 11',
      description: 'GoPro Hero 11 Black 5K',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/gopro-hero-11-black-5k-107982554/',
    },
  ];
}
