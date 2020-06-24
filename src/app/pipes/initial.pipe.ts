import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const arrayName = value.split(' ');

    return arrayName[0][0] + arrayName[1][0];
  }

}
