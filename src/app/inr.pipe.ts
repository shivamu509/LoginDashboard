import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inr',
  standalone: false
})
export class InrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value && value !== 0) return '';

    return '₹' + Number(value).toLocaleString('en-IN');
  }

}
