import { Component, OnInit } from '@angular/core';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminCommentsComponent implements OnInit {

  resultsLength = 0;

  columnsToDisplay = ['id','title' ];

  displayedColumns: string[] = [ 'id', 'name', 'description' , 'date' , 'delete'];

  arrApple  = []
  selectedItemUUID: any;

  constructor(
    private appleServices :AppleService
  ) { }

  ngOnInit(): void {
    this.getApple()
  }

  getApple():void {
    this.appleServices.getApple().then(res  => {
      this.arrApple = res.filter(el => el.comments ? el.comments.length : false)
      // console.log(res);
      
    })
  }

  deleteComments(item) :void {
    console.log(item);
    
    
    const apple = this.arrApple.find(el=> el.uuid === item.uuid);
    
    this.arrApple = this.arrApple.map(el => {
      if(el.uuid === item.uuid){ 
   
        console.log(el);
        
        return {...el, comments: el.comments.filter(elem => elem.id !==item.id)}
      }
      
      return el;
    })
    console.log(this.arrApple);
    
    // this.appleServices.deleteComments(item , `apple ${apple.id}`).then(res => {
    //   this.getApple()
    // })
 
   
    
 
 
  
  
    
  }

}
