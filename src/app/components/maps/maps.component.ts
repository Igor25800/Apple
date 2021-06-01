import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { from } from 'rxjs';
import { MapService } from 'src/app/shared/services/map/map.service';
import { mysor } from 'src/app/mysor/mysor'


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  @ViewChild('map') divMap: ElementRef;
  @Input() form 
  private map: google.maps.Map;
  private gmarker: google.maps.Marker = null;
  focused: boolean

  
  mapLocation = mysor


  // formGroup  = this.formBolider.group({
  //   maps: new FormControl(this.mapLocation[0])
  // })


 

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private   mapService: MapService,
    private formBolider :FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initMap();
   
    
  }

  initMap(item?): void { //google-карта
    const {maps}  = this.form.value
    
    const loader = new Loader({
      apiKey: this.mapService.apiKey
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(this.divMap.nativeElement, {
        center:  maps    ,
        zoom: 15,
        disableDefaultUI: true,
        })
        let map = new google.maps.Marker({
          position:  maps   ,
          map: this.map
        })

    })
  }

  
}
