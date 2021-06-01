import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacement'
})
export class ReplacementPipe implements PipeTransform {

  transform(value:string,): string {
    // console.log(value);
    
    
    return value.trim().replace(/ /g, '-')
    
  }

}
