import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milliseconds'
})
export class MillisecondsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return `${value} ms`;
  }
}
