import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list.component';
import { AlbumDetailGuard } from './album-detail.guard';
import { AlbumDetailComponent } from './album-detail.component';

const routes: Routes = [
  { path: 'albums', component: AlbumListComponent },
  //{ path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id', canActivate: [ AlbumDetailGuard ], component: AlbumDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
