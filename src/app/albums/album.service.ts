import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { IAlbum } from './album.component';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albumUrl = 'api/songs/songs.json';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<IAlbum[]> {//return Observable IAlbum[]
    // return this.http.get<IAlbum[]>(this.albumUrl);
    return this.http.get<IAlbum[]>(this.albumUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAlbum(id: number): Observable<IAlbum | undefined> {
    return this.getAlbums().pipe(
      map((products: IAlbum[]) => products.find(p => p.albumId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      //client-side or network error
      errorMessage = `error  ${err.error.message}`;
    } else {
      //backend error with response code
      errorMessage = `error ${err.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
