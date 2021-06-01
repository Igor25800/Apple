import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memory'
})
export class MemoryPipe implements PipeTransform {

  transform(value: any, sto: any): any   {
    if(!value) return value 
    // console.log(value.memory);
    // console.log(value);

    
   
     switch(sto) {
       case 'color':
      return value.filter( (v, i, a) => a.findIndex(t => t.color.toLowerCase().trim() === v.color.toLowerCase().trim()) === i)
      case 'memory' :
        return value.filter( (v, i, a) => a.findIndex(t => t.memory.toLowerCase() === v.memory.toLowerCase()) === i)
      }


   
      
    
  

    
    
  }

}
