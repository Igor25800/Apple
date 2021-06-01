import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DetaliService {

  constructor(
    private firestory: AngularFirestore,
   
  ) { }



  getDatali() : Promise<any> {
    return  this.firestory.collection('detali').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))

  }

  addDetali(datali: any , num:string) {
    return this.firestory.collection('detali').doc(num).set(datali)
  }

  deleteDatali(id: string){
    return this.firestory.collection('detali').doc(id).delete();
  }

  updateDetali(id, datali:any){
    return  this.firestory.collection('detali').doc(id).set(datali)
  }
}
