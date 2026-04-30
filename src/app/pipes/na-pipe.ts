import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nA',
})
export class NaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value !== '' && value !== null && value !== undefined) {
      return value;
    } else {
      return "--"
    }
  }
}
