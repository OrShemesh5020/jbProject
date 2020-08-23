import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyString'
})
export class MultiplyStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
