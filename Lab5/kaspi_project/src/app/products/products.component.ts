import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../interface/products.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() likeToggle = new EventEmitter<{
    id: number;
    likes: number;
    isLiked: boolean;
  }>();

  isLiked: boolean = false;

  ngOnInit() {
    this.loadLikes();
  }

  loadLikes() {
    const storedLikes = localStorage.getItem(`likes_${this.product.id}`);
    const storedIsLiked = localStorage.getItem(`liked_${this.product.id}`);

    this.product.likes = storedLikes ? Number(storedLikes) : this.product.likes;
    this.isLiked = storedIsLiked === 'true';
  }

  toggleLike() {
    this.isLiked = !this.isLiked;

    this.product.likes += this.isLiked ? 1 : -1;

    localStorage.setItem(
      `likes_${this.product.id}`,
      this.product.likes.toString()
    );
    localStorage.setItem(`liked_${this.product.id}`, this.isLiked.toString());

    this.likeToggle.emit({
      id: this.product.id,
      likes: this.product.likes,
      isLiked: this.isLiked,
    });
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }

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
