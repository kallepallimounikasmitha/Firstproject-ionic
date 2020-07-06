import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainpage'
})
export class MainpagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
