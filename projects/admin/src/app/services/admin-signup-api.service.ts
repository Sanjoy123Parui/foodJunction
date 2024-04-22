import { Injectable } from '@angular/core';

// import HttpClient library
import { HttpClient } from '@angular/common/http';

// import rxjs library
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminSignupApiService {

  // declare api url
  private adminAPI_URL:string = 'https://foodsorder-rest-api.glitch.me/adminapi';

  // dipendency class inject
  constructor(private http:HttpClient) { }

  // declare admin signin api function call
  adminLogin(adminSignindata:any):Observable<any>{
    return this.http.post(`${this.adminAPI_URL}/signin`,adminSignindata);
  }

  // declare admin signup api function call
  adminRegister(adminSignupdata:any):Observable<any>{
    return this.http.post(`${this.adminAPI_URL}/signup`,adminSignupdata);
  }

  // declare admin password change api function call
  adminforgetPassword(adminChangepass:any):Observable<any>{
    return this.http.post(`${this.adminAPI_URL}/adminpasswordchange`, adminChangepass);
  }
}
