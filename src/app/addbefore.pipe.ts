import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addbefore'
})
export class AddbeforePipe implements PipeTransform {

  transform(value: any): any {

    let pattern = /base64/;

    if (!pattern.test(value)) {
      return "https://www.behkiana.ir/"+value;
    } else {
      return value;
    }
    
  }

}