import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PhotosList } from './photos-list';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.scss',
})
export class AlbumPhotosComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private photoService = inject(PhotoService);

  albumId = Number(this.route.snapshot.paramMap.get('id'));
  photos: WritableSignal<PhotosList[]> = signal([]);

  constructor() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.photoService
      .getPhotos(this.albumId)
      .subscribe((data) => this.photos.set(data));
  }

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
