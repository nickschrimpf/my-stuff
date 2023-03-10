import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp,provideFirebaseApp, getApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, initializeAuth, Auth ,connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, initializeFirestore, Firestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideStorage,getStorage, connectStorageEmulator } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      let auth:Auth;
      if(environment.production){
        auth = getAuth()
      }else{
        auth = initializeAuth(getApp(),{})
        connectAuthEmulator(auth,'http://127.0.0.1:9099')
      }
      return auth
    }),
    provideFirestore(() => {
      let firestore:Firestore
      if(environment.production){
        firestore = getFirestore()
      }else{
        firestore = initializeFirestore(getApp(),{})
        connectFirestoreEmulator(firestore,'localhost',8080)
      }
      return firestore
    }),
    provideStorage(() => {
      let storage = getStorage()
      if(!environment.production){
        connectStorageEmulator(storage,'localhost',9199)
      }
      return storage
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
