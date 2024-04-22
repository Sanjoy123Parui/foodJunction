import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersLoginAuthGuard implements CanActivate {

  // after user login canactivate
  canActivate():boolean{
    
    // get token
    let usersToken = localStorage.getItem('token');

    if(!usersToken){
      return false;
    }
    else{
      return true;
    }

  }
  
}
