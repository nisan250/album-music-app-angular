import { IAlbum } from './album.component';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  getAlbums(): IAlbum[] {
    return [
      {
        "albumId": 1,
        "albumName": "demo one",
        "artist" : "demo artist",
        "genre": "demo genre",
        "releaseDate": "April 1, 1978",
        "price":10,
        "rating": 2,
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
      },
      {
        "albumId": 2,
        "albumName": "demo two",
        "artist" : "demo artist",
        "genre": "demo genre",
        "releaseDate": "April 1, 1978",
        "price": 12,
        "rating": 3,
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
      },
      {
        "albumId": 5,
        "albumName": "demo three",
        "artist" : "demo artist",
        "genre": "demo genre",
        "releaseDate": "April 1, 1978",
        "price": 11,
        "rating": 3.5,
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
      },
      {
        "albumId": 8,
        "albumName": "demo four",
        "artist" : "demo artist",
        "genre": "demo genre",
        "releaseDate": "April 1, 1978",
        "price": 9,
        "rating": 5,
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
      },
      {
        "albumId": 10,
        "albumName": "demo five",
        "artist" : "demo artist",
        "genre": "demo genre",
        "releaseDate": "April 1, 1978",
        "price": 30,
        "rating": 4.7,
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
      }
    ]
  }
}
