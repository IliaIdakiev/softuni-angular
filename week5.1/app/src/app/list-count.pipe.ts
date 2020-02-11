import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listCount'
})
export class ListCountPipe implements PipeTransform {

  transform(value: any): any {
    return value && value.length || null;
  }
}
