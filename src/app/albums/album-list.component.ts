import { Component, OnInit } from '@angular/core';
import { IAlbum } from './album.component';

@Component({
  selector: 'fma-albums',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  pageTitle: string = 'Album Music List';
  imageWidth: number = 52;
  isImageShow: boolean = true;
  listFilter: string = 'work in progress...';
  albums: IAlbum[] = [
    {
      "albumId": 1,
      "albumName": "demo one",
      "artist" : "demo artist",
      "genre": "demo genre",
      "releaseDate": "April 1, 1978",
      "price":10,
      "rating": 4.7,
      "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
    },
    {
      "albumId": 2,
      "albumName": "demo two",
      "artist" : "demo artist",
      "genre": "demo genre",
      "releaseDate": "April 1, 1978",
      "price": 12,
      "rating": 4,
      "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
    },
    {
      "albumId": 5,
      "albumName": "demo three",
      "artist" : "demo artist",
      "genre": "demo genre",
      "releaseDate": "April 1, 1978",
      "price": 11,
      "rating": 5,
      "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
    },
    {
      "albumId": 8,
      "albumName": "demo four",
      "artist" : "demo artist",
      "genre": "demo genre",
      "releaseDate": "April 1, 1978",
      "price": 9,
      "rating": 3.8,
      "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
    },
    {
      "albumId": 10,
      "albumName": "demo five",
      "artist" : "demo artist",
      "genre": "demo genre",
      "releaseDate": "April 1, 1978",
      "price": 30,
      "rating": 4.9,
      "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
    }
  ];

  ngOnInit(): void {
    console.log('Album List Component initiated!!');
  }

  toggleImage(): void {
    this.isImageShow = !this.isImageShow;
  }
}
