import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Observable } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  user$ : Observable<firebase.User>;
  isNavbarCollapsed = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.user$ = authService.user$;
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['']);
  }

}
