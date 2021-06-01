import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private firestory: AngularFirestore,
  ) { }


  getGallery() : Promise<any> {
    return  this.firestory.collection('gallery').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))
  }

  addGallery(gallery , num:string) {
    return this.firestory.collection('gallery').doc(num).set(gallery)
  }

  deleteGallery(id: string){
    return this.firestory.collection('gallery').doc(id).delete();
  }

  updateGallery(id, gallery){
    return  this.firestory.collection('gallery').doc(id).set(gallery)
  }
}
