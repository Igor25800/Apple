import { Component, OnInit } from '@angular/core';
import { IGallery } from 'src/app/shared/interfaces/gallery.interfaces';
import { GalleryService } from 'src/app/shared/services/gallery.service';

@Component({
  selector: 'app-gallery-ivybox',
  templateUrl: './gallery-ivybox.component.html',
  styleUrls: ['./gallery-ivybox.component.scss']
})
export class GalleryIvyboxComponent implements OnInit {

  arrGallery : IGallery[] = []

  constructor(
    private galleryServices: GalleryService
  ) { }

  ngOnInit(): void {
    this.getGalley()
  }

  getGalley():void {
    this.galleryServices.getGallery().then(res => {
      this.arrGallery = res 
    })
  }

}
