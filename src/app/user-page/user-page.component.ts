import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import { FirestoreService } from '../services/firestore/firestore.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  dbUser: any;

  constructor(private firestore: FirestoreService, private auth: AuthService){
    this.auth.userSubject.subscribe({
      next: user => {
        if(user){
          this.firestore.getUser(user.uid).then(dbuser => {
            this.dbUser = dbuser;
            console.log('dbdb', dbuser)
          } )
        }
      }
    })
  }


}
