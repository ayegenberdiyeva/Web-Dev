import { Component, Input } from '@angular/core';
import { Product } from '../interface/products.interface';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() product!: Product;

  shareOn(platform: 'whatsapp' | 'telegram', link: string) {
    const encodedLink = encodeURIComponent(link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${encodedLink}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodedLink}`;
    }

    window.open(shareUrl, '_blank');
  }
}
