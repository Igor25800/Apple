import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CaruselService {

  constructor(
    private firestory: AngularFirestore,
  ) { }

  getApple() :Promise<any> {
    return  this.firestory.collection('apple').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()  ))
  }


  getCarysel() : Promise<any> {
    return  this.firestory.collection('carysel').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))
  }

  addCarysel(carysel , num:string) {
    return this.firestory.collection('carysel').doc(num).set(carysel)
  }

  deleteCarysel(id: string){
  
    
    return this.firestory.collection('carysel').doc(id).delete();
  }

  updateCarysel(id, carysel){
    return  this.firestory.collection('carysel').doc(id).set(carysel)
  }
}
