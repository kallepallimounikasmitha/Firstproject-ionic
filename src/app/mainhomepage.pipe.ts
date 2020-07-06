import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainhomepage'
})
export class MainhomepagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
