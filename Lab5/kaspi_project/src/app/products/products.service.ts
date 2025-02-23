import { Injectable } from '@angular/core';
import { Product } from '../interface/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  protected products: Product[] = [
    {
      id: 1,
      imageUrl: '/assets/images/ip16.jpeg',
      name: 'iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      likes: 0,
      categoryid: 1,
    },
    {
      id: 2,
      imageUrl: '/assets/images/s25ultra.jpeg',
      name: 'Samsung Galaxy S25 Ultra',
      description: 'Samsung Galaxy S25 Ultra 5G 12GB/256GB',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000',
      likes: 0,
      categoryid: 1,
    },
    {
      id: 3,
      imageUrl: '/assets/images/xiaomi.jpg',
      name: 'Xiaomi Redmi Note 12',
      description: 'Xiaomi Redmi Note 12 256GB',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000',
      likes: 0,
      categoryid: 1,
    },
    {
      id: 4,
      imageUrl: 'assets/images/macbook.jpg',
      name: 'MacBook Air M2',
      description: 'Apple MacBook Air M2 16GB/512GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      likes: 0,
      categoryid: 2,
    },
    {
      id: 5,
      imageUrl: 'assets/images/asusrog.jpg',
      name: 'ASUS ROG Zephyrus G14',
      description: 'ASUS ROG Zephyrus G14 Ryzen 9/32GB/1TB',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-16-gb-ssd-1000-gb-bez-os-ga403uu-qs077-90nr0hz2-m003s0-118634611/?c=750000000',
      likes: 0,
      categoryid: 2,
    },
    {
      id: 6,
      imageUrl: 'assets/images/ps5.jpg',
      name: 'Sony PlayStation 5',
      description: 'Sony PlayStation 5 825GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
      likes: 0,
      categoryid: 4,
    },
    {
      id: 7,
      imageUrl: 'assets/images/samsungqled.jpg',
      name: 'Samsung QLED 4K',
      description: 'Samsung 55" QLED 4K Smart TV',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-qe85q60dauxce-216-sm-chernyi-119285288/?c=750000000',
      likes: 0,
      categoryid: 3,
    },
    {
      id: 8,
      imageUrl: 'assets/images/dyson.jpg',
      name: 'Dyson V15 Detect',
      description: 'Dyson V15 Detect Cordless Vacuum',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-110975356/?c=750000000',
      likes: 0,
      categoryid: 4,
    },
    {
      id: 9,
      imageUrl: 'assets/images/applewatch.jpeg',
      name: 'Apple Watch SE GPS Gen.2',
      description: 'Apple Watch SE S/M 40mm GPS',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      likes: 0,
      categoryid: 4,
    },
    {
      id: 10,
      imageUrl: 'assets/images/gopro.jpg',
      name: 'GoPro Hero 11',
      description: 'GoPro Hero 11 Black 5K',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-13-black-edition-123482859/?c=750000000',
      likes: 0,
      categoryid: 4,
    },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(categoryid: Number): Product | undefined {
    return this.products.find((product) => product.categoryid === categoryid);
  }

  constructor() {}
}
