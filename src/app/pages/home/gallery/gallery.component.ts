import { Component, Input, OnInit } from '@angular/core';
import {EventService} from '@crystalui/angular-lightbox'
import { IGallery } from 'src/app/shared/interfaces/gallery.interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() arrGallery: IGallery[] 

  constructor(private eventService: EventService) {

   
   }

  ngOnInit(): void {
  this.eventService.emitter.subscribe((event) => {
      console.log(event);
  })
  
  }

}
