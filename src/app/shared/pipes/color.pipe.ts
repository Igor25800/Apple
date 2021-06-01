import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {



  transform(value: any , item: string): any {
     
      
   return value
  }

}
