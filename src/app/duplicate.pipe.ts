import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicate',
})
export class DuplicatePipe implements PipeTransform {
  transform(value: string, repetition: number): string {
    let newStr = value;
    if (repetition > 0) {
      for (let index = 1; index < repetition; index++) {
        newStr = newStr + ' ' + value;
      }
    }
    return newStr;
  }
}
