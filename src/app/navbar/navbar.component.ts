import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Observable } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  appUser: AppUser;
  isNavbarCollapsed = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    authService.appUser$.subscribe(appUser => {this.appUser = appUser;});
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['']);
  }

}
