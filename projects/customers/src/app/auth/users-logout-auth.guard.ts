import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersLogoutAuthGuard implements CanActivate {

  // declare after user logout authentication
  canActivate(): boolean {
    
    let usersToken = localStorage.getItem('token');

    if(!usersToken){
      return true;
    }
    else{
      return false;
    }
  }
  
}
