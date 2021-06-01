import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAtuth : AngularFireAuth,
    private firestory: AngularFirestore,
    private router : Router
  ) { }

  // async signIn()  {

  //  const table =  await  this.firestory.collection('table').get()
    
  //  table.subscribe(res =>{
  //    res.docs.forEach(el => {console.log(el.data());
  //    }) 
     
  //  })
    

  signIn()  {

    const user = {
      id: 33,
      name: 'taran'
    }
    const userNew = {
      id: 77,
      name: 'taran'
    }

 

    // this.firestory.collection('table').doc('www1').set(user).then((user)=> {
    //     user.get().then(u => console.log(u.data()))
    // })


  
  // this.updateInCollection('table', 'www1', userNew);

  // this.addItemToCollection('laptop007', userNew)
  
  // this.firestory.persistenceEnabled$.subscribe((r)=>{
  //   console.log(r);
    // this.getItemsByColection('table')
  // })

  // this.getItemsByColection('')
  
  }
// 1 метод добавлане юзері 
addIteam(){
    const user = {
      id: 33,
      name: 'taran'
    }
   

    this.firestory.collection('table').add(user).then(res=>{
      res.get().then(x => {
        console.log(x.data());
        
      })
      
    })
  }

  //2 Метод добавленя юзерів 

  additeam2(){

    const userNew = {
      id: 77,
      name: 'taran'
    }

    this.firestory.collection('table').doc('user1').set(userNew).then(data=> {
      console.log(data);
      
    })


  }

  deleteFromCollection(colectionName, docName){
    this.firestory.collection(colectionName).doc(docName).delete()
  }

  updateInCollection(colectionName, docName, body){
    this.firestory.collection(colectionName).doc(docName).set(body)
  }





  getItemsByColection(colectionName){
    this.firestory.collection(colectionName).ref.where('id', '==', 77).get().then(res => {
      console.log(res.docs.map(e => e.data()));
      
    })
  }

  // addItemToCollection(collectionName, body){
  //     this.firestory.collection(collectionName).add(body).then((user)=> {
  //    console.log(user);
     
  //  })
  // }



}
