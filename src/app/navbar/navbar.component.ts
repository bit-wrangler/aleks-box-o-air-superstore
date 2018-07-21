import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  user$ : Observable<firebase.User>;

  constructor(private authService: AuthService) { 
    this.user$ = authService.user;
  }

}
