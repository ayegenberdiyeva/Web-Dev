import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { AlbumsList } from './albums-list';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, AlbumCardComponent, CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
})
export class AlbumsComponent {
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albums: WritableSignal<AlbumsList[]> = signal([]);

  constructor() {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumService.getAlbums().subscribe((data) => this.albums.set(data));
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums.set(this.albums().filter((album) => album.id !== id));
    });
  }

  openAlbumDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
