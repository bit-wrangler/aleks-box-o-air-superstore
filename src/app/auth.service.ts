import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //TODO: Create a non firebase User
  private _user: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this._user = afAuth.authState;
  }

  get user(): Observable<firebase.User> {
    return this._user;
  }

  googleLogin() {
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  redirectIfAuthorized( redirectFunc: () => void ){
    this.afAuth.auth.getRedirectResult().then( (result) => {
      if (result.user) redirectFunc();
    });
  }

}
