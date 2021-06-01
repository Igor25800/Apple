import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ICategory } from 'src/app/shared/interfaces/category.interfaces';
import { CategoryService } from 'src/app/shared/services/category/category.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  arrCategory: ICategory[]

  constructor(
    private categoryServices: CategoryService,
    private routerActivate: ActivatedRoute,
    private router :Router,
  ) {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.getCategry()
      }
    })
   }

  ngOnInit(): void {
  }

  getCategry():void{
    
    const category = this.routerActivate.snapshot.paramMap.get('category')
    // this.category = category
    this.categoryServices.getCategory().then(res=>{
      this.arrCategory = res.filter(product =>  product.category === category)
    })
  }

}
