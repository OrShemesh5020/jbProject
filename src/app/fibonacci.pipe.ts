import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacci',
})
export class FibonacciPipe implements PipeTransform {
  transform(firstIndex: number, length: number): string {
    let seriesString: any = 0;
    if (firstIndex > 0 && length >= 0) {
      let a = this.getTheRequestedNumber(firstIndex);
      let b = this.getTheRequestedNumber(firstIndex + 1);
      let c = a + b;
      if (length === 1) {
        seriesString = a;
      } else {
        seriesString = a + ', ' + b;
        // console.log(a + ', ' + b);
        for (let i = 2; i < length; i++) {
          seriesString = seriesString + ', ' + c;
          a = b;
          b = c;
          c = a + b;
        }
      }
    }
    return seriesString + '.';
  }
  getTheRequestedNumber(indexPosition: number): number {
    let a = 0;
    let b = 1;
    let number = a;
    if (indexPosition === 2) {
      number = b;
    } else {
      for (let i = 2; i < indexPosition; i++) {
        number = a + b;
        a = b;
        b = number;
      }
    }
    return number;
  }
}
