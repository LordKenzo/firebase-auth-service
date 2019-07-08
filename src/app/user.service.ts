import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  uid: Observable<string>;
  isAdmin: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth, private firebase: AngularFireDatabase) {
    this.uid = this.afAuth.authState.pipe(
      filter(authState => !!authState),
      map(authState => authState.uid),
    );
    this.isAdmin = this.uid.pipe(
      filter(uid => !!uid),
      switchMap(uid => this.firebase.object<boolean>(`/admins/${uid}`).valueChanges()),
    );
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
