import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosList } from '../app/album-photos/photos-list';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  getPhotos(albumId: number): Observable<PhotosList[]> {
    return this.http.get<PhotosList[]>(`${this.apiUrl}?albumId=${albumId}`);
  }

  constructor() {}
}
