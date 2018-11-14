import { Component, OnInit } from '@angular/core';
import { IAlbum } from './album.component';
import { AlbumService } from './album.service';

@Component({
  selector: 'fma-albums',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  // providers: [AlbumService]
  // we dont have to add the provider here because the albumService is already registerd
})
export class AlbumListComponent implements OnInit {
  //no need for _private, with the private in the parameter constructor , typescript do for us automaticaly
  //private _albumService;
  constructor(private albumService: AlbumService) {
    //this._albumService = albumService;
    // this.listFilter =  ''
  }

  albums: IAlbum[];
  pageTitle: string = 'Album Music List';
  imageWidth: number = 52;
  isImageShow: boolean = true;
  // listFilter: string = 'work in progress...';

  _listFilter: string;
  filteredAlbums: IAlbum[];
  get listFilter(): string {
    return this._listFilter
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAlbums = this.listFilter ? this.performFilter(this.listFilter) : this.albums;
  }


  onRatingClicked (message: string):void {
    console.log(message);
  }

  performFilter(filterBy: string): IAlbum[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.albums.filter((album: IAlbum) =>
        album.albumName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    console.log('Album List Component initiated!!');
     this.albums = this.albumService.getAlbums();
     this.filteredAlbums = this.albums;
  }

  toggleImage(): void {
    this.isImageShow = !this.isImageShow;
  }
}
