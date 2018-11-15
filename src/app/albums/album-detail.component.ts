import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAlbum } from './album.component';
import { AlbumService } from './album.service';
@Component({
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  pageTitle: string = 'Album Detail';
  errorMessage = '';
  album: IAlbum | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) { }

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id');

    if(param) {
      const id = +param;
      this.getAlbum(id);
    }
  }

  getAlbum(id: number) {
    this.albumService.getAlbum(id).subscribe(
      album => this.album = album,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/albums']);
  }
}
