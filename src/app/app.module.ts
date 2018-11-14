import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list.component';
import { ConvertPriceToTextPipe } from './shared/convert-price-to-text.pipe';
import { RatingComponent } from './shared/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    ConvertPriceToTextPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
