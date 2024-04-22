import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLogoutGuard implements CanActivate {

  // admin logout
  canActivate(): boolean{

    let adminToken = localStorage.getItem('token');

    if(!adminToken){
      return true;
    }
    else{
      return false;
    }
  }
  
}
