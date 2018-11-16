import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list.component';
import { AlbumDetailComponent } from './album-detail.component';
import { AlbumDetailGuard } from './album-detail.guard';
import { ConvertPriceToTextPipe } from '../shared/convert-price-to-text.pipe';
import { RatingComponent } from '../shared/rating.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AlbumListComponent,
    ConvertPriceToTextPipe,
    RatingComponent,
    AlbumDetailComponent  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'albums', component: AlbumListComponent },
      //{ path: 'albums/:id', component: AlbumDetailComponent },
      { path: 'albums/:id', canActivate: [ AlbumDetailGuard ], component: AlbumDetailComponent },
    ]
    // , { useHash: true}
    ),
  ]
})
export class AlbumModule { }
