import { Component, Input, OnInit } from '@angular/core';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { Iphone } from 'src/app/shared/interfaces/iphone-interfaces';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-models-apple',
  templateUrl: './models-apple.component.html',
  styleUrls: ['./models-apple.component.scss']
})
export class ModelsAppleComponent implements OnInit {
  
  @Input() arr :Array<Iphone>

  @Input() name :string

  localApple: IApple[] =[]

  constructor(
    private order : OrderService
  ) { }

  ngOnInit(): void {
  }


  localAdd(apple: IApple):void{
    
    
    if(localStorage.length > 0 && localStorage.getItem('basket')) {
      this.localApple = JSON.parse(localStorage.getItem('basket'));
      
      if(this.localApple.some(localApple => localApple.id ===  apple.id)) {
        const index = this.localApple.findIndex(localApple => localApple.id === apple.id)
        this.localApple[index].count += apple.count
      }
      else {
        this.localApple.push(apple)
       
      }
      localStorage.setItem('basket' , JSON.stringify(this.localApple))
    }
    else {
      this.localApple.push(apple)
      localStorage.setItem('basket' , JSON.stringify(this.localApple))
    
    }
    
    this.order.basket.next(apple)

    
    
  }
}
