import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentstatus'
})
export class OrdersPipe implements PipeTransform {

  transform(value: any): any {

    var retx = ""
    if (value == 0) {
      retx = "<span>paymentstatus</span>";
    }

    return retx;
  
}

}
