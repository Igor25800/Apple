import { AfterViewInit, Component, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import * as EventEmitter from 'node:events';
import { element } from 'protractor';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { ICategory } from 'src/app/shared/interfaces/category.interfaces';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { DetaliService } from 'src/app/shared/services/detali/detali.service';

import { OrderService } from 'src/app/shared/services/order/order.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit , OnChanges {
  
//  characteristics: Array<{[key: string]: string}>
//  [{option1: 'asdasd'}, {options2: 'asdasd'}]
// @Input() type: 'apple' | 'mac' | 'apple watch' | any;
  rangeValues: number[] = [0,2000];
  pricaRange = {
    min: 0,
    max: 2000
  }



  @Input()  isLoader: boolean   = true
 
  hiden  : boolean = true

  source: MatSlider
  
  arrCategory:Array<IApple> 
  category

  arrApple :Array<IApple> = []
  localApple: IApple[] =[]

  img = '../../../assets/images/loader.png'
 
  filterArr = {
    memory: [],
    colors: [],
    nameProduct : [],
    display: [],
    processor : [],
    charging: [],
    year : []
  }

 
  


  allApples = [];
  arrDetali: any;
  onlad: any;
 

  constructor(
    private categoryServices: CategoryService,
    private routerActivate: ActivatedRoute,
    private router :Router,
    private appleServices: AppleService,
    private order : OrderService,
    private detaliServices :DetaliService,
    public dialog: MatDialog
  ) { 
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.get()
        // this.isLoader = true
        // this.onLoad()
        // this.onLoad()
        // window.location.reload()
      }
    })

   
  }

  ngOnChanges(): void {
  //  this.onLoad()
 
      
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SnackBarComponent, {
      width: '250px',
      data: {title: 'Добавлено в Корзину'}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
    
  }

  
 

  forceReload() {
   
  }

  handleChange({values: [r1, r2]}){
    this.rangeValues = [r1, r2];
    this.getArrAppleRange(r1, r2)
  }

  onChangeRange(val, num){
    const r1 = num ? this.rangeValues[0] : val;
    const r2 = num ? val : this.rangeValues[1];
    this.rangeValues = [r1, r2];
    this.getArrAppleRange(r1, r2)
  }







  getArrAppleRange(r1, r2){
    // console.log( this.arrApple);
    const entries = Object.entries( this.obj).filter(([key, val]: [string, string[]]) => val.length)

     let allApplesCopy = [...this.allApples]
     entries.forEach(([key, val]: [string, string[]]) =>{
        allApplesCopy = allApplesCopy.filter(el => val.includes(el[key]))
     })

    this.arrApple = allApplesCopy.filter(el =>  Math.floor((el.price/el.dollarPrice)) >= r1 &&  Math.floor((el.price/el.dollarPrice)) <= r2 + 1  )
    // console.log(this.arrApple);
    
  }

  setMinMaxRange(max){
    // console.log(max);
    
    this.pricaRange = {
      min: 0,
      max : +max + 0.5
    };

    this.rangeValues = [0, +max + 0.5]
  }

  
  // @HostListener('window:load', ['$event'])  loadImage(e) {
  // console.log(e);
  
  //  this.isLoader = true;
    
  // }

  // hideLoader() {
  //   this.isLoader = false;
  // }



  onLoad(value?){
   
    
    if(value) {
      this.isLoader = false
      // window.location.reload(true)
    }
  
   
  }

  @HostListener('onload') onClick() {
    window.alert('Host Element Clicked');
 }


  ngOnInit(): void {
    // this.get()
    // console.log('22222');
    this.order.$arrOrder.next(this.localApple)
  
   
    // console.log(window.location);
    
    
    // setTimeout(()=>{
    //   this.rangeValues = [10, 90];
    // }, 5000)
    
    // this.get()
 
    
  }


    
  urlParam(param, text?){
    return param ? param + text : ''
  }
 

  get(){
    const category = this.routerActivate.snapshot.paramMap.get('category')
    
    const apple = this.routerActivate.snapshot.paramMap.get('apple')
    
    // console.log(category);   
    
    

    if(category) {
      this.appleServices.getApple().then(apple =>{
        this.arrApple = apple.filter(product =>  product.category.trim().replace(/ /g, '-')=== category.trim().replace(/ /g, '-')  )
        this.allApples = this.arrApple;
        this.category = category.replace(/-/g, ' ').toLowerCase()
        // console.log(this.allApples);
        this.getFields();
        // console.log(this.allApples);
        
        const getMax = this.allApples.reduce((acc, el) => Math.floor(el.price/el.dollarPrice) > acc ?  Math.floor(el.price/el.dollarPrice) : acc, 0)
        
        this.setMinMaxRange(getMax)
        this.getArrAppleRange(this.pricaRange.min , this.pricaRange.max);
      })
    }


    if(apple) {
      this.appleServices.getApple().then(apl =>{
        this.arrApple = apl.filter(el => el.categoryProduct.trim().replace(/ /g, '-').toLowerCase() === apple.trim().replace(/ /g, '-')  )
        this.allApples = this.arrApple;
        this.category = apple.replace(/-/g, ' ').toLowerCase();
     
        this.getFields();
        // console.log(this.allApples);
        const getMax = this.allApples.reduce((acc, el) =>  Math.floor(el.price/el.dollarPrice) > acc ?  Math.floor(el.price/el.dollarPrice) : acc, 0)
        // console.log(getMax);
        
        this.setMinMaxRange(getMax)
        this.getArrAppleRange(this.pricaRange.min , this.pricaRange.max);
      })
    }
    
    

  }




  getFields(...rest){
    // console.log('======', this.arrApple);
    // rest.forEach((el: any) =>{
    //   const type = new Set();
    //   this.arrApple.forEach((elem: any) => {
    //     type.add(el[elem])
    //       if(elem.detalis){
    //         type.add(el.detalis.display)
    //      } 
    //   })

    //   this.filterArr[el] = [...type];
    // })




    const memory = new Set();
    const colors = new Set();
    const nameProduct = new Set();
    const display = new Set();
    const processor = new Set()
    const charging = new Set()
    const year = new Set()

    this.arrApple.forEach((el: any) => {
      
    //  console.log(el.color.trim(),'--');
    // console.log(el.color, '---');
    
     
      if(el.memory){
      memory.add(el.memory?.trim().toLowerCase() )
      }
      if(el.color){
      colors.add(el.color?.trim().toLowerCase() )
      }
      if(el.categoryProduct) {
      nameProduct.add(el.categoryProduct?.trim().toLowerCase() )
      }
      if(el.detalis){
        display.add(el.detalis.display?.trim().toLowerCase() )
      }  
      if(el.detalis) {
        processor.add(el.detalis.processor?.trim().toLowerCase() )
      }  
      if(el.detalis) {
        charging.add(el.detalis.charging?.trim().toLowerCase())
      }  
      if(el.detalis) {
        year.add(el.detalis.year?.trim().toLowerCase())
      }  
      
    })
   
    this.filterArr.memory = [...memory];
    this.filterArr.colors = [...colors];
    this.filterArr.nameProduct = [...nameProduct];
    this.filterArr.display = [...display];
    this.filterArr.processor = [...processor];
    this.filterArr.charging = [...charging];
    this.filterArr.year = [...year];

    // console.log( this.filterArr.colors);
    
  }

  obj:any = { }


  selectedFieldsMemory(event: string[], type: string){
  
    
    
   
    
    this.obj[type] = event
    // console.log(type);
    
  
   const entries = Object.entries( this.obj).filter(([key, val]: [string, string[]]) => val.length)

   let allApplesCopy = [...this.allApples]
 

  
   
   
   entries.forEach(([key, val]: [string, string[]]) =>{
    
   
     
      // allApplesCopy = allApplesCopy.filter(el => val.includes(el[key] || (el.detalis && el.detalis[key]) ))
      allApplesCopy = allApplesCopy.filter(el => { 
        // console.log(el);
        
       return  val.includes(el[key]?.trim().toLowerCase() || (el.detalis && el.detalis[key]?.trim().toLowerCase()  )  
         )  })
   })
   

   const [r1, r2] = this.rangeValues;
   this.arrApple = allApplesCopy.filter(el => (Math.floor(el.price/el.dollarPrice)) > r1 && (Math.floor(el.price/el.dollarPrice)) < r2 )


  }

  

  // selectedFieldsColors(event){
  //   // this.filter.color = event
  //       // this.filteredByColor = Object.entries(event).filter(([key, value]) => value).map(([key, value]) =>key);
  //   this.obj.color = Object.entries(event).filter(el => el[1]).map(el =>el[0]);
       
  //   const color = Object.values(event).filter(Boolean)
  //   // console.log(color,'color');
    
  //   this.arrApple = this.allApples.filter(el =>  event[el.color]  || !color.length).filter(el =>  this.obj.memory.includes(el.memory) || !this.obj.memory.length )
   
  // }

  // selectedFieldsnameProduct( event ){
  //   this.obj.categoryProduct = Object.entries(event).filter(el => el[1]).map(el=> el[0])
    
  //   const name = Object.values(event).filter(Boolean)
    

  //   this.arrApple = this.allApples.filter(el => event[el.categoryProduct] || !name.length).filter(el => {
  //      return this.obj.color.includes(el.color )  || !this.obj.color.length 
  //   })
 
    
  // }




  // selectedFieldsDisplay(event){
  //   // this.filter.color = event
  //       // this.filteredByColor = Object.entries(event).filter(([key, value]) => value).map(([key, value]) =>key);
  //       this.filteredByColor = Object.entries(event).filter(el => el[1]).map(el =>el[0]);
  //       console.log(this.filteredByColor);
  //     const color = Object.values(event).filter(Boolean)
  //   this.arrApple = this.allApples.filter(el =>  event[el.color]  || !color.length).filter(el =>  this.filteredByMemory.includes(el.memory) || !this.filteredByMemory.length)
   
  // }

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
   
    // this.order.$arrOrder.next(this.localApple)
   
    
  }



}
