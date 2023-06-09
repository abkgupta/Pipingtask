import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return 100;
  // } 
  transform(value: string): string {
    if (value.length > 20) {
      return value.slice(0, 20) + '...';
    }
    return value;
  }

}
