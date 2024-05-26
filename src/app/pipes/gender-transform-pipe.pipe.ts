import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderTransformPipe',
  standalone: true
})
export class GenderTransformPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'male':
        return 'Errkek';
      case 'female':
        return 'Kadın';
      default:
        return '';
    }
  }

}
