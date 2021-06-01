import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: any, state): any {
    if(!value) return value
    if(!state) return ''
  // console.log(value);
   return value.filter( category =>  category.categoryProduct ===  state)
    
  }

}
