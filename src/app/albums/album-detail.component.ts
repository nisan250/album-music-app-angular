import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAlbum } from './album.component';

@Component({
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  pageTitle: string = 'Album Detail';
  album: IAlbum;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.album = {
      "albumId": 10,
      "albumName": "demo album six",
      "artist" : "demo artist",
      "genre": "demo genre",
      "releaseDate": "April 1, 1111",
      "price": 30,
      "rating": 4.9,
      "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
    };
  }

  onBack(): void {
    this.router.navigate(['/albums']);
  }
}
