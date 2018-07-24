import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap } from "rxjs/operators";
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(route, state) : Observable<boolean> {
    return this.authService.user$.pipe(
      switchMap(user => this.userService.get(user.uid).valueChanges()),
      map(user => user.isAdmin)
    );
  }
}
