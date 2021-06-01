import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { DevicePropertiesComponent } from 'src/app/components/device-properties/device-properties.component';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { INavs } from 'src/app/shared/interfaces/category-navs.interfaces';
import { ICategory } from 'src/app/shared/interfaces/category.interfaces';
import { Iphone } from 'src/app/shared/interfaces/iphone-interfaces';
import { Airpods } from 'src/app/shared/models/airpords.models';
import { Phone } from 'src/app/shared/models/iphone.models';
import { Mac } from 'src/app/shared/models/mac.models';
import { Watch } from 'src/app/shared/models/watch.models';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { DetaliService } from 'src/app/shared/services/detali/detali.service';
import { NavsService } from 'src/app/shared/services/navs/navs.service';
import { ModalProductsComponent } from '../admin-products/modal-products/modal-products.component';

@Component({
  selector: 'app-admin-detali',
  templateUrl: './admin-detali.component.html',
  styleUrls: ['./admin-detali.component.scss']
})
export class AdminDetaliComponent implements OnInit {

  arr :Array<object> = [ { nameEN: 'description',  nameUa: 'Опис' } , { nameEN: 'character',  nameUa: 'Характеристика' } ]
  arrNav : Array<INavs>
  arrApple : Array<IApple>

  detal
  category :string
  apple : IApple

  isBtn: boolean

  arrIphone = ['weigh' , 'battery', 'pixels' , 'display' , 'color' , 'memory' , 'processor' , 'cell']
  arrMac = ['processor' , 'nuclei', 'cpu' , 'videoCard' , 'color' , 'year' , 'ram' , 'display']
  arrWatch = ['display' , 'strap', 'housing' , 'size' , 'color']
  arrAirpods = ['color' , 'charging']

  selectedItem: any

  arrDetali : Array<Iphone> = []

  selection =  this.formBolider.group({
    select: new FormControl(''),
    detali : new FormControl(''),
   
  })

  iphone  = this.formBolider.group({
    id: new FormControl(),
    weigh : new FormControl('' ,Validators.required),
    battery : new FormControl('' , Validators.required),
    pixels: new FormControl('' ,Validators.required),
    display : new FormControl('' ,Validators.required),
    color: new FormControl('',  Validators.required),
    memory: new FormControl('' , Validators.required),
    processor: new FormControl('' ,Validators.required),
    cell: new FormControl('' ,Validators.required)
  })

  mac  = this.formBolider.group({
    id: new FormControl(),
    processor: new FormControl('' , Validators.required),
    nuclei: new FormControl('' , Validators.required),
    cpu: new FormControl('', Validators.required),
    videoCard : new FormControl('' ,Validators.required),
    color: new FormControl('' ,Validators.required),
    year:new FormControl('' , Validators.required),
    ram: new FormControl('', Validators.required),
    display: new FormControl('', Validators.required),
    category: new FormControl(''),
    uuid: new FormControl(''),
  })

  watch  = this.formBolider.group({
    id: new FormControl(),
    display: new FormControl('', Validators.required),
    strap: new FormControl('', Validators.required),
    housing: new FormControl('' ,Validators.required),
    size : new FormControl('', Validators.required),
    color: new FormControl('', Validators.required) ,
    category:new FormControl(''),
    uuid: new FormControl(''),
  
  })

  airpods = this.formBolider.group({
    id: new FormControl(),
    uuid: new FormControl(),
    color : new FormControl('' ,Validators.required),
    charging: new FormControl('' , Validators.required)
  })

  isdisabled: boolean;


  constructor(
    private navServices : NavsService,
    public dialog: MatDialog,
    private formBolider :FormBuilder,
    private detaliServices : DetaliService,
    private appleServices :AppleService
  ) { }

  ngOnInit(): void {
    this.getNav()
    this.getDetali()
    this.getApple()
  }


  getDetali():void {
    this.detaliServices.getDatali().then(res => {
      
      this.arrDetali = res
     
      // console.log(this.arrDetali , 'Detali');
      
      
    })
 
  }

  getApple():void {
    this.appleServices.getApple().then(res => {
      this.arrApple = res
      console.log(res , 'Apple') ;
      
      
    })
  }
  
  getNav():void {
    this.navServices.getNavs().then(res => {
      this.arrNav = res
    })
  }

  formGroup(event){
    const { select  , detali} = this.selection.value

    if(select === 'iphone') {
      const {weigh,battery,pixels,display,color, memory,processor ,cell} = this.iphone.value
      const iphone = {...new Phone(this.apple.id,weigh,battery,pixels,display,color,memory,processor,cell,select, this.apple.uuid ) }
      
      const newIphone = {...this.apple, detalis: {...iphone}}
      this.appleServices.updateApple(`apple ${this.apple.id}`,newIphone).then(res => {
          this.getApple()
      })
    }

    if(select === 'mac') {
      const {processor,nuclei,cpu,videoCard,color ,year, ram,display } = this.mac.value

      const mac = {...new Mac(this.apple.id ,processor,nuclei,cpu,videoCard,color,year,ram,display,select , this.apple.uuid )}
      const newMac = {...this.apple, detalis: {...mac}}
      this.appleServices.updateApple(`apple ${this.apple.id}`,newMac).then(res => {
          this.getApple()
      })
    } 

    if(select === 'apple watch') {
      const {display,strap,housing,size,color } = this.watch.value 

      const watch = {...new Watch(this.apple.id,display,strap,housing,size,color,select , this.apple.uuid)}
      const newWatch = {...this.apple, detalis: {...watch}}
      this.appleServices.updateApple(`apple ${this.apple.id}`,newWatch).then(res => {
        this.getApple()
      })
    }

    if(select === 'airpods') {
      const {color , charging  } = this.airpods.value

      const airpods = {... new Airpods(this.apple.id, this.apple.uuid, color , charging , select)}
      const newAirpods = {...this.apple, detalis: {...airpods}}

      this.appleServices.updateApple(`apple ${this.apple.id}`,newAirpods).then(res => {
        this.getApple()
      })
    }
   
  
  // Робоча тема
  //
  //
  //   if(select === 'iphone') {
  //     const {weigh,battery,pixels,display,color, memory,processor ,cell} = this.iphone.value
  //     if(this.selectedItem && this.selectedItem.id) {
      
  //       const iphone = {...new Phone(this.selectedItem.id,weigh,battery,pixels,display,color,memory,processor,cell,select, this.selectedItem.uuid ) }
  //       this.detaliServices.updateDetali(`detali ${iphone.id}`,iphone).then(res => {
  //         this.getDetali()
  //       })
  //     } else {
  //       const iphone = {...new Phone(1,weigh,battery,pixels,display,color,memory,processor,cell,select, this.apple.uuid ) }
  //       if(this.arrDetali.length > 0) {
  //         iphone.id = this.arrDetali.slice(-1)[0].id +1
  //       }
  //       this.detaliServices.addDetali(iphone, `detali ${iphone.id}`).then(res => {
  //         this.getDetali()
  //       })
  //     }
  // }

  //   if(select === 'mac') {
  //     const {processor,nuclei,cpu,videoCard,color ,year, ram,display } = this.mac.value
  //     if(this.selectedItem && this.selectedItem.id) {
        
  //       const mac = {...new Mac(this.selectedItem.id,processor,nuclei,cpu,videoCard,color,year,ram,display,select , this.selectedItem.uuid )}
  //       this.detaliServices.updateDetali(`detali ${mac.id}`,mac).then(res => {
  //         this.getDetali()
  //       })

  //     } else {
  //       const mac = {...new Mac(1, processor,nuclei,cpu,videoCard,color ,year, ram,display, select, this.apple.uuid )}
    
  //       if(this.arrDetali.length > 0) {
  //         mac.id = this.arrDetali.slice(-1)[0].id +1
  //       }
  //       // const newMac = {...product, detail: {...mac}}
  //       this.detaliServices.addDetali(mac, `detali ${mac.id}`).then(res => {
  //         this.getDetali()
  //       })
       
  //     }
      
  //   }

  //   if(select === 'apple watch') {
  //     const {display,strap,housing,size,color  } = this.watch.value
  //       if(this.selectedItem && this.selectedItem.id) {
  //         const watch = {...new Watch(this.selectedItem.id,display,strap,housing,size,color,select , this.selectedItem.uuid)}

  //         this.detaliServices.updateDetali(`detali ${watch.id}`,watch).then(res => {
  //           this.getDetali()
  //         })
  //       } else {

  //         const watch = {...new Watch(1,display,strap,housing,size,color,select , this.apple.uuid)}
  //         if(this.arrDetali.length > 0) {
  //           watch.id = this.arrDetali.slice(-1)[0].id +1
  //         }
  //         this.detaliServices.addDetali(watch, `detali ${watch.id}`).then(res => {
  //           this.getDetali()
  //         })
        
  //       }
  //     }
  //     if(select === 'airpods') {
  //       const {color , charging  } = this.airpods.value
  //       if(this.selectedItem && this.selectedItem.id) {
  //         const airpods = {... new Airpods(this.selectedItem.id, this.selectedItem.uuid, color , charging , select)}

  //         this.detaliServices.updateDetali(`detali ${airpods.id}`,airpods).then(res => {
  //           this.getDetali()
  //         })

  //       } else {
  //         const airpods = {... new Airpods(1, this.apple.uuid, color , charging ,select)}

  //         if(this.arrDetali.length > 0) {
  //           airpods.id = this.arrDetali.slice(-1)[0].id +1
  //         }
  //         this.detaliServices.addDetali(airpods, `detali ${airpods.id}`).then(res => {
  //           this.getDetali()
  //         })
        
  //       }
  //     }
  
    this.isdisabled = true
    
  }

  IphoneAdd(even) {

  }


  detali(item):void {
    this.detal= item.nameEN 
   
    
  }
  
  add(item) :void {
    // const { select  , detali} = this.selection.value
    // console.log(select);
    

    this.selectedItem = this.arrApple.find(el => el.category === item.category && el.uuid === item.uuid) as any
 
    
    
    
    
    this.iphone.reset()
    this.mac.reset()
    this.watch.reset()
    this.airpods.reset()
    this.isBtn = false
    this.isdisabled = false
    
    if(this.selectedItem.detalis ) {
      this.isBtn = true
      const {detalis: {weigh,battery,pixels,display,color, memory,processor ,cell} } = this.selectedItem  as any;
      this.iphone.patchValue({ weigh,battery,pixels,display,color, memory,processor ,cell });
      this.isdisabled = false
    }  
   
    if(this.selectedItem.detalis) {
      // this.isBtn = true
      const {detalis: {processor  , nuclei ,cpu ,videoCard ,color , year, ram  ,display}  } = this.selectedItem as any;
      this.mac.patchValue({ processor,nuclei,cpu,videoCard,color,year,ram,display});
      this.isdisabled = false
    }  
    if(this.selectedItem.detalis) {
      // this.isBtn = true
      const { detalis: { display,strap,housing,size,color } } = this.selectedItem as any;
      this.watch.patchValue({ display,strap,housing,size,color});
      this.isdisabled = false
    }  

    

    if(this.selectedItem.detalis) {
      // this.isBtn = true
      const { detalis: {  color , charging } } = this.selectedItem as any;
      this.airpods.patchValue({color , charging});
      this.isdisabled = false
    }  
    
    this.category = item.category
    this.apple =  item
 
  }

  


}
