import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashed',
  standalone: true
})
export class DashedPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll(' ', '-');
  }

}
