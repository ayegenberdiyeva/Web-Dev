import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlbumsList } from '../albums/albums-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  @Input() album!: AlbumsList;
  @Output() delete = new EventEmitter<number>();
  @Output() openDetail = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.album.id);
  }

  onOpenDetail(): void {
    this.openDetail.emit(this.album.id);
  }
}
