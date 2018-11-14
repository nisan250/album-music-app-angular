import {  Component, OnChanges, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'fma-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`you clicked the rating: ${this.rating} `);
  }
}
