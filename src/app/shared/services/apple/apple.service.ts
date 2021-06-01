import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FileDetector } from 'selenium-webdriver';
import { environment } from 'src/environments/environment';
import { IApple } from '../../interfaces/apple.interfaces';
import firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class AppleService {

  private url :string
  private novaUrl :string
  public maps :string
  public seach :string  = ''
  private key = environment.NP_KEY

  constructor(
    private firestory: AngularFirestore,
    private http: HttpClient,
   
  ) {
    this.url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
    this.novaUrl = `https://api.novaposhta.ua/v2.0/json/${this.key}`
 
   }


  getСurrency() :Observable<any> {
    return this.http.get<Array<any>>(this.url)
  }



 

  getNova() :Observable<any> {
   console.log(this.seach);
   
    return this.http.post<Array<any>>(this.novaUrl, {
      "modelName": "AddressGeneral",
        "calledMethod": "getWarehouses",
        "methodProperties": {
             "Language": "ua",
             "CityName": this.seach,
        },
        
        "apiKey": this.key
    
     })
     
  }

  getApple() : Promise<any> {
    return  this.firestory.collection('apple').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))
    // return  this.firestory.collection('apple').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))

      // return  this.firestory.collection('apple').ref.orderBy('id', 'asc').startAt(1).limit(5).get().then(res =>res.docs.map(el=> el.data()))
  }

  addApple(apple: IApple , num:string) {
    // delete (apple as any).details;
    // apple.description =  apple.description || 'ssss' as any;
    return this.firestory.collection('apple').doc(num).set(apple)
  }

  deleteApple(id: string){
    return this.firestory.collection('apple').doc(id).delete();
  }

  updateApple(id, apple){
    
    return  this.firestory.collection('apple').doc(id).set(apple)
  }

  
  deleteComments(doc? , apple?){
    return this.firestory.collection('apple').doc(apple).ref.update({
      "comments": firebase.firestore.FieldValue.arrayRemove(doc)
    }) 
    
    
   
  }

  // void deleteItem() async{
  //   var firebaseUser = await FirebaseAuth.instance.currentUser();
  //   Firestore.instance.collection("stories").document(firebaseUser.uid).updateData({
  //     "images" : FieldValue.arrayRemove([imageURL])
  //   }).then((_) {
  //     print("success!");
  //   });
  //   }

}
