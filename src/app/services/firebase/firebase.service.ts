import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: 'AIzaSyAA-c6hiAYkLofIila2EwHwo2WWJiow-ew',
    authDomain: 'superprogetto-nuovissimo.firebaseapp.com',
    projectId: 'superprogetto-nuovissimo',
    storageBucket: 'superprogetto-nuovissimo.appspot.com',
    messagingSenderId: '647222524984',
    appId: '1:647222524984:web:993cc19ae6ee50abf37acd',
  };

  app = initializeApp(this.firebaseConfig);

  constructor() { }
}
