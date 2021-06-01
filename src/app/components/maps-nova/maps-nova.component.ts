import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

import { MapService } from 'src/app/shared/services/map/map.service';
import { mysor } from 'src/app/mysor/mysor'
import { AppleService } from 'src/app/shared/services/apple/apple.service';


@Component({
  selector: 'app-maps-nova',
  templateUrl: './maps-nova.component.html',
  styleUrls: ['./maps-nova.component.scss']
})
export class MapsNovaComponent implements OnInit, OnChanges {
  @Output() param :EventEmitter<any> = new EventEmitter()
  @ViewChild('map') divMap: ElementRef;
  @Input() form 
  private map: google.maps.Map;
  private gmarker: google.maps.Marker = null;
  focused: boolean

  sear:string

  city = ['Львів' , 'Київ', 'Одеса' , 'Харків' ,'Запоріжжя' , 'Харків' , 'Дніпро'  ,'Миколаїв' , 'Луцьк']

  arrNova  = []

  

  mapLocation = mysor

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private   mapService: MapService,
    private formBolider :FormBuilder,
    public appleServices : AppleService
  ) { }

  ngOnInit(): void {
    this.initMap();
    
    this.add()

   
    // this.form.valueChanges.subscribe(el =>{
    // this.appleServices.seach = el.nova;

    //   this.appleServices.getNova().subscribe(res => {
    //     return res
        
    //   })
    // })
   
    
  
  
  }

  ngOnChanges(): void { 
   
  }


  add(value?){
    // console.log(value);
    
    if(!this.appleServices.seach) {
    this.appleServices.seach = 'Львів'
    } else {
      this.appleServices.seach = value
    }


     this.appleServices.getNova().subscribe(res => {
      this.arrNova = res.data
     
      
      this.arrNova.length = 50
     })
     

  

  }

  

  initMap(item?): void { //google-карта
    // const {maps}  = this.form.value
    let ob 
    if(!item) {
      ob = { lat:  49.8232878828969, lng: 	24.026186443972122 }
    } else {
         ob = { lat: +item?.Latitude , lng: +item?.Longitude	 } 
    }
   
    
    const loader = new Loader({
      apiKey: this.mapService.apiKey
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(this.divMap.nativeElement, {
        center:  ob,
        zoom: 15,
        disableDefaultUI: true,
        })
        let map = new google.maps.Marker({
          position:  ob  ,
          map: this.map
        })

    })
  }

}

