import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  login(){
    this.authService.googleLogin();
  }

  ngOnInit(){
    var routeSnapeshot = this.route.snapshot;

    this.authService.redirectIfAuthorized(() => {
      var returnUrl = routeSnapeshot.queryParamMap.get('returnUrl');
      if (!returnUrl) returnUrl = '';
      this.router.navigate([returnUrl]);
    });
  }
}
