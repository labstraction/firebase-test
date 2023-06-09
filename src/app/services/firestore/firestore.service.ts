import { Injectable } from '@angular/core';

import { Firestore, collection, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { Manga } from 'src/app/model/manga';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db: Firestore

  constructor(private firebase: FirebaseService) {
    this.db = getFirestore(this.firebase.app);
  }

  getManga(id: string):Promise<Manga | null>{
    const docRef = doc(this.db, "manga", id);
    return getDoc(docRef).then(document => {
      if (document.exists()) {
        return {id: document.id, ...document.data()} as Manga;
      } else {
        return null;
      }
    })
  }

  getMangas(): Promise<Manga[]>{
    const collectionRef = collection(this.db, 'manga');
    return getDocs(collectionRef).then(col => {
      return col.docs.map(doc => ({id:doc.id, ...doc.data()} as Manga))
    })
  }


  getUser(id: string):Promise<any | null>{
    const docRef = doc(this.db, "users", id);
    return getDoc(docRef).then(document => {
      if (document.exists()) {
        return {id: document.id, ...document.data()} as any;
      } else {
        return null;
      }
    })
  }

  saveUser(user: any){
    const docRef = doc(this.db, "users", user.uid);
    return setDoc(docRef, {email: user.email})
    .then(() => console.log('utente salvato'))
    .catch((err) => console.log(err))
  }


}
