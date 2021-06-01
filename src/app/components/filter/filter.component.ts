import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit , OnChanges  {
  @Input() filterArr :Array<any> 
  @Output() selectedFields : EventEmitter<any> = new EventEmitter<any>() 
  @Input() title :string

  filterForm = new FormGroup({})

  
  
  constructor() { }

  ngOnChanges(): void {

    
    this.filterArr.forEach(el => {
      this.filterForm.addControl(el, new FormControl(''))
      // this.filterForm.addControl(el.di)
    })
    this.formSubscribe();
  
   
      
  }

  ngOnInit(): void {
    console.log(this.filterArr);
    
  }
  

  formSubscribe() {
    this.filterForm.valueChanges.subscribe(res =>{
     
      
      const selected = Object.entries(res).filter(([key, val]) => val).map(([key, val]) => key)
  
    
      
        this.selectedFields.emit(selected)
    })
  }

}
