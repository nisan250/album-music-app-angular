import { NgModule } from '@angular/core';
import { AlbumListComponent } from './album-list.component';
import { AlbumDetailComponent } from './album-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumRoutingModule } from './album-routing.module';


@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumDetailComponent
    ],
  imports: [
    SharedModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
