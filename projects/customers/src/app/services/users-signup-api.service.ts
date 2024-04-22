import { Injectable } from '@angular/core';

// import httpclient library
import { HttpClient } from '@angular/common/http';

// import rxjs library
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersSignupApiService {

  // declare backend api url
  private usersAPI_URl:string = 'https://foodsorder-rest-api.glitch.me/userapi';

  // declare dipendency class inject
  constructor(private http:HttpClient) { }

  // declare user signup data post api function call
  signupPost(userSignupdata:any):Observable<any>{
    return this.http.post(`${this.usersAPI_URl}/signup`,userSignupdata);
  }

  // declare user signin data post api function call
  signinPost(userSignindata:any):Observable<any>{
    return this.http.post(`${this.usersAPI_URl}/signin`,userSignindata);
  }

  // declare user reset password data post api function call
  resetPassPost(userChangePass:any):Observable<any>{
    return this.http.post(`${this.usersAPI_URl}/userpasswordchange`,userChangePass);
  }
}
