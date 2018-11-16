import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPriceToTextPipe } from './convert-price-to-text.pipe';
import { RatingComponent } from './rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RatingComponent,
    ConvertPriceToTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
    ConvertPriceToTextPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
