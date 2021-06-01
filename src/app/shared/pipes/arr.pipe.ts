import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arr'
})
export class ArrPipe implements PipeTransform {

  transform(value: any[] , name?:string): any {
    if(!value){
      return ''
    }

    switch(name) {
      case  'categoryProduct' : 
      return value.reduce((acum , el , arr) =>  acum + ',' + el.categoryProduct, '').slice(1)
      case 'category' : 
      return value.reduce((acum , el , arr) =>  acum + ',' + el.category, '').slice(1)
      case 'count' : 
      return value.reduce((acum , el , arr) =>  acum + ',' + el.count + 'шт', '').slice(1)
      case 'price' : 
      const param =  value.reduce((acum , el , arr) =>  acum + ',' + +el.price / el.dollarPrice, '').slice(1)
      return  param
      case 'грн' : 
      return value + ' Грн' 
      case 'images' : 
      return  value.map(el=> el.image)
    }
    
  }
}
