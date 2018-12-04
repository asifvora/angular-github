import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortgrid'
})

@Injectable()
export class SortGridPipe implements PipeTransform {

  transform(array: Array<any>, args: string): Array<any> {
    if (typeof args[0] === "undefined") {
      return array;
    }
    array.sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at));

    return array;
  }

}

