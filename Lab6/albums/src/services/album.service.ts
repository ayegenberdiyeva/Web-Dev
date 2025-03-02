import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsList } from '../app/albums/albums-list';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  getAlbums(): Observable<AlbumsList[]> {
    return this.http.get<AlbumsList[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<AlbumsList> {
    return this.http.get<AlbumsList>(`${this.apiUrl}/${id}`);
  }

  updateAlbum(album: AlbumsList): Observable<AlbumsList> {
    return this.http.put<AlbumsList>(`${this.apiUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  constructor() {}
}
