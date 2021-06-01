import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { INavs } from '../../interfaces/category-navs.interfaces';
import { Phone } from '../../models/iphone.models';

@Injectable({
  providedIn: 'root'
})
export class NavsService {

  $arrNav : BehaviorSubject<any> = new BehaviorSubject<any>([])
  $obj : Subject<any> = new Subject<any>()

  

  constructor(
    private firestory: AngularFirestore,
  ) { 
    this.getNavs()
  }


  getNavs() {
    return  this.firestory.collection('navs').ref.orderBy('id', 'asc').get().then(res =>{
      const data = res.docs.map(el=> el.data())  as INavs[]
      this.$arrNav.next(data)
      return data
    })
    
  }

  addNavs(navs:INavs , num:string) {
    return this.firestory.collection('navs').doc(num).set(navs)
  }

  deleteNavs(id: string){
    return this.firestory.collection('navs').doc(id).delete();
  }

  updateNavs(id, category){
    return  this.firestory.collection('navs').doc(id).set(category)
    }
}
