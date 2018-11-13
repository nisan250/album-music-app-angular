import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPriceToText'
})

export class ConvertPriceToTextPipe implements PipeTransform {
  transform(value: number, target: number): string {
    return value > target ? 'expensive price' : 'good price'
  }
}
