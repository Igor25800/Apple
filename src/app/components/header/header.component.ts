import { Component, OnInit  , Inject} from '@angular/core';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { INavs } from 'src/app/shared/interfaces/category-navs.interfaces';
import { NavsService } from 'src/app/shared/services/navs/navs.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DevicePropertiesComponent } from '../device-properties/device-properties.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  // animal: string;
  // name: string;


  hiden:boolean
  showw:boolean
  overlay:boolean 
  arrNav:Array<INavs>  = []

  count: any = 0

  localProducts: IApple[] 

  constructor(
    private navServices: NavsService,
    private orderService: OrderService,
    public dialog: MatDialog,
    public loginServices : LoginService,
    private router: Router,
    
    
  ){}

  ngOnInit(): void {
    this.getSubgict()
    this.getNav()
    this.loadLocalStorage();
    this.initSubscription();

 
  }


  openDialog() {

    
     if(this.loginServices.isLogin === false) {
      const dialogRef = this.dialog.open(LoginModalComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
     
    }
     
     else {
      this.loginServices.isLogin = true
      this.router.navigate(['admin'])

      

     }
    

 
  
    
   
    
     
   
 
  }

  realod(){
   
  }
  


  getSubgict():void{
      this.navServices.$arrNav.subscribe(res=>{
        this.arrNav = res
      })
   
  }

  getNav():void{
    this.navServices.getNavs().then(res=>{
      this.arrNav = res
    })
  }

  togle(){
    this.hiden = !this.hiden
   
  }



  initSubscription(): void {
    this.orderService.basket.subscribe( data => {
      this.loadLocalStorage();
      
    })
  }
  
  loadLocalStorage(){
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.localProducts = JSON.parse(localStorage.getItem('basket'));
    }
    this.totla()
  }
  
  totla(){
    this.count  = this.localProducts?.reduce((acum, el)=> el ?acum + el.count : 0 , 0)
  
    
  }

}
