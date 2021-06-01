import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameString'
})
export class NameStringPipe implements PipeTransform {

  transform(value): unknown {

    if(value) return value + 'gb'
    
  }

}
