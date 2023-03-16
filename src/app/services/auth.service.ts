import { Injectable } from '@angular/core';
import { Auth, authState, sendPasswordResetEmail, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { browserSessionPersistence, createUserWithEmailAndPassword } from '@firebase/auth';
import { UserService } from './user.service';

interface SignUpInfo{
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth:Auth,
    private readonly router:Router,
    private readonly userServe:UserService
  ) {}


  initAuthListener(): void{
    authState(this.afAuth).subscribe(data => {
      if(data){
        console.log(data)
        this.router.navigate(['home']);
      }else{
        this.router.navigate(['login']);
      };
    });
  };

  registerNewUser(signUpInfo:SignUpInfo): Promise<void>{
    this.afAuth.setPersistence(browserSessionPersistence);
    return createUserWithEmailAndPassword(this.afAuth,signUpInfo.email,signUpInfo.password)
    .then(user => {
      this.userServe.createNewUserStuffDB(user)
    });
  };

  logIn(signUpInfo:SignUpInfo){
    this.afAuth.setPersistence(browserSessionPersistence);
    return signInWithEmailAndPassword(this.afAuth,signUpInfo.email,signUpInfo.password);
  }
  logOut(){
    this.afAuth.signOut();
  };
  onPasswordRest(email:string){
    return sendPasswordResetEmail(this.afAuth,email);
  };


}
