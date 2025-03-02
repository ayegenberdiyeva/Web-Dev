import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsList } from '../albums/albums-list';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss',
})
export class AlbumDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album: WritableSignal<AlbumsList | null> = signal(null);
  editedTitle = signal('');

  constructor() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchAlbum(albumId);
  }

  fetchAlbum(id: number) {
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album.set(album);
      this.editedTitle.set(album.title);
    });
  }

  updateTitle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.editedTitle.set(input.value);
  }

  saveChanges() {
    if (!this.album()) return;

    const updatedAlbum: AlbumsList = {
      id: this.album()!.id,
      userId: this.album()!.userId,
      title: this.editedTitle(),
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        this.album.set(response);
        console.log('Album updated:', response);
      },
      error: (err) => console.error('Error updating album:', err),
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
