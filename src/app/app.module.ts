import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list.component';
import { ConvertPriceToTextPipe } from './shared/convert-price-to-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    ConvertPriceToTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
