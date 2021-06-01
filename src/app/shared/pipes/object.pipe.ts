import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'object'
})
export class ObjectPipe implements PipeTransform {

  transform(value: any): any {
    // delete value.category
    console.log(value);
    
    delete value?.uuid
    delete value?.id
    return value

    
    
  }

}
