import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPriceToText'
})

export class ConvertPriceToTextPipe implements PipeTransform {
  transform(value: number, target: number): string {
    console.log(value);
    return value > target ? 'expensive price' : 'good price'
  }
}
