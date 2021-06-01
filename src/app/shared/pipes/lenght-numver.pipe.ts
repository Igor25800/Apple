import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenghtNumver'
})
export class LenghtNumverPipe implements PipeTransform {

  transform(value , arr , state ): any {
    if(!value) return null
    if(!arr) return  []
    if(!state) return []
    
  
      const  fil = arr.filter( category  => category.category ===  state.toLowerCase() )
      let f = fil.length
      let number  = 0
      while(number! === f ) {
        return number +=1
      }
      
   
    
    return 0

    
  }

}
