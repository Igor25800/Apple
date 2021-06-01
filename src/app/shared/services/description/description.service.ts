import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IDescription } from '../../interfaces/description.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(
    private firestory: AngularFirestore,
  ) { }



  getDescription() : Promise<any> {
    return  this.firestory.collection('description').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))
  }

  addDescription(description : IDescription , num:string) {
    return this.firestory.collection('description').doc(num).set(description)
  }

  deleteDescription(id: string){
    return this.firestory.collection('description').doc(id).delete();
  }

  updateDescription(id, description : IDescription){
    return  this.firestory.collection('description').doc(id).set(description)
  }

}
