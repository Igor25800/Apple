import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routing'
})
export class RoutingPipe implements PipeTransform {

  transform(value:any, memory,color ): any {
   
  }

}
