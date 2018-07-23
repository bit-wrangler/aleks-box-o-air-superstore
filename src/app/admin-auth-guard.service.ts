import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor() { }

  canActivate(route, state) {
    
  }
}
