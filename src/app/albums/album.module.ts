import { NgModule } from '@angular/core';
import { AlbumListComponent } from './album-list.component';
import { AlbumDetailComponent } from './album-detail.component';
import { AlbumDetailGuard } from './album-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumDetailComponent
    ],
  imports: [
    RouterModule.forChild([
      { path: 'albums', component: AlbumListComponent },
      //{ path: 'albums/:id', component: AlbumDetailComponent },
      { path: 'albums/:id', canActivate: [ AlbumDetailGuard ], component: AlbumDetailComponent },
    ]
    // , { useHash: true}
    ),
    SharedModule,
  ]
})
export class AlbumModule { }
