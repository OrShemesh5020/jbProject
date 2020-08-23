import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string): unknown {
    let newStr = '';
    for (let index = 0; index < value.length; index++) {
      newStr = !isNaN(parseInt(value.charAt(index)))
        ? newStr + value.charAt(index)
        : newStr + '';
      // console.log(parseInt(value.charAt(index)));
    }
    return newStr;
  }
}
