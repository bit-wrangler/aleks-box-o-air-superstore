import { UserService } from './user.service';
import { Observable, of} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
import { switchMap } from '../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //TODO: Create a non firebase User
  private _user: Observable<firebase.User>

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth
  ) {
    this._user = afAuth.authState;
  }

  get user$(): Observable<firebase.User> {
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

  get appUser$() : Observable<AppUser> {
    return this._user.pipe(
      switchMap(
        user => 
        user ? this.userService.get(user.uid).valueChanges() : of<AppUser>(null)
      )
    );
  }

}
