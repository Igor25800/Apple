import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any , sort ): any {
    if(!value) return ''

  

    switch(sort) {
      case '123' :
      return value.sort((a,b) =>  a.memory - b.memory)
      case 'abs' :
        return value.sort((a, b ) => {
         if (a.color < b.color) {
            return -1;
          }
          return 0;
        })
    }
   
    
  
    
    // switch(sort){
    //   case "number":
    //   return value.sort((a,b )=> a-b)
    //   case 'abs' :
    //     return   
    // }

  
    
  }

}
