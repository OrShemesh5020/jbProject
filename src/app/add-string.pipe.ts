import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addString',
})
export class AddStringPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let result = value;
    args.forEach((arg) => (result = result + ' ' + arg));
    return result;
  }
}
