import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list.component';
import { ConvertPriceToTextPipe } from './shared/convert-price-to-text.pipe';
import { RatingComponent } from './shared/rating.component';
import { HomeComponent } from './home/home.component';
import { AlbumDetailComponent } from './albums/album-detail.component';
import { AlbumDetailGuard } from './albums/album-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    ConvertPriceToTextPipe,
    RatingComponent,
    HomeComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'albums', component: AlbumListComponent },
      //{ path: 'albums/:id', component: AlbumDetailComponent },
      { path: 'albums/:id', canActivate: [ AlbumDetailGuard ], component: AlbumDetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
    // , { useHash: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
