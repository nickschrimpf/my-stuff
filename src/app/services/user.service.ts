import { Injectable } from '@angular/core';
import { collectionData, Firestore ,addDoc,collection} from '@angular/fire/firestore';

interface userProfile{
    uid:string
    email:string
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser:any
  private userProfile:any

  constructor(private readonly firestore:Firestore) {
    this.userProfile  = collection(this.firestore,'userProfiles')
  }

  createNewUserStuffDB(user:any){


    return addDoc(this.userProfile,{userID:user.user.uid,email:user.user.email})


  }
  // CREATE USER PROFILE DB ENTRY
  // EMAIL
  // UID

}
