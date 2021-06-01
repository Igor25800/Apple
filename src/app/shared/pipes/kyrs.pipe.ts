import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kyrs'
})
export class KyrsPipe implements PipeTransform {

  transform(value: any): any {
    
    
    return value.toString().split('').map((x, index) =>{
      if(index === value.toString().length - 3-1)
        x += ' '
       return x
    }).join('')
    
  }

}
