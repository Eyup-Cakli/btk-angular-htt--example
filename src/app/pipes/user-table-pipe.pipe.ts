import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userTablePipe',
  standalone: true
})
export class UserTablePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'id':
        return 'Id';
      case 'firstName':
        return 'İsim';
      case 'lastName':
        return 'Soyad';
      case 'gender':
        return 'Cinsiyet';
      case 'age':
        return 'Yaş';
      default:
        return '';
    }
  }
}
