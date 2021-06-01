import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ICategory } from '../../interfaces/category.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  

  arrCategory$ :Subject<Array<any>> = new Subject<Array<any>>()

  constructor(
    private afAtuth : AngularFireAuth,
    private firestory: AngularFirestore,
    private router : Router
  ) { }




  getCategory() {
    return  this.firestory.collection('category').ref.orderBy('id', 'asc').get().then(res =>  {
    //  return res.docs.map(el=> el.data())
      const allCategories =  res.docs.map(e =>{
        const data: any = e.data() as Array<ICategory>
      
        return {
          ...data,
          doc: e.id
        }
      })
      this.arrCategory$.next(allCategories);
      // console.log(allCategories);
      
      return allCategories;
    })
    

  //  return this.firestory.collection('category').ref.where("id", ">=", 1).orderBy("id", "asc").get().then(res=> res.docs.map(el=>el.data()  el.id ))
      
  }


  arrCategory() {
    return this.arrCategory$.asObservable()
  }


  addCategory(category:ICategory , num:string) {

    return this.firestory.collection('category').doc(num).set(category)
    // return this.firestory.collection('table').add(user).then(res=>{
    // return  res.get().then(x => x.data())
    // })
  //  return this.firestory.collection('table').add(user)
  }
  

  deleteCategory( id: string){
  return this.firestory.collection('category').doc(id).delete();
  }

 

  updateCategory(id, category){
  return  this.firestory.collection('category').doc(id).set(category)
  }
}