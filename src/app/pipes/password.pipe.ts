import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, aparecer: boolean = true): string {
    return (aparecer) ? '*'.repeat(value.length) : value;
  }

}
