import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin :boolean = false

  constructor(
    private firestory: AngularFirestore,
  ) { }

  getDatali() : Promise<any> {
    return  this.firestory.collection('Admin').ref.get().then(res =>res.docs.map(el=> el.data()))
  }

}
