import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {

  // declare admin login auth
  canActivate(): boolean {
    
    let adminToken = localStorage.getItem('token');

    if(!adminToken){
      return false;
    }
    else{
      return true;
    }
  }
  
}
