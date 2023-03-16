import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { collection, CollectionReference, DocumentData,doc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyStuffService {
stuffCollection:CollectionReference
stuff$:Observable<DocumentData[]>
  constructor(private firestore:Firestore) {
    this.stuffCollection = collection(this.firestore,'stuff');
    this.stuff$ = collectionData(this.stuffCollection,{idField:'id'})
  }

  onGetStuff(): Observable<DocumentData[]>{
    return this.stuff$;
  }
  getStuffByID(id:string){
    const stuffDocRef = doc(this.firestore,`stuff/${id}`)
    return docData(stuffDocRef,{idField:'id'})
  }

}
