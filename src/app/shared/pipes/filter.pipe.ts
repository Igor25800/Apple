import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, state ): any {
    if(!value) return value
    if(!state) return ''
   
    return value.filter( category  => category.category ===  state.toLowerCase() )
 
  }
        
   
    
  

}
