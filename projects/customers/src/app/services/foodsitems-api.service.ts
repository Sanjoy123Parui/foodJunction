import { Injectable } from '@angular/core';

// import httpclient library
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import rxjs library
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsitemsApiService {

  // declare backend api url
  private foodItemsAPI_URL:string = 'https://foodsorder-rest-api.glitch.me/foodapi';

  // declare token variable
  private userToken:any = '';

  // declare dipendency class inject
  constructor(private http:HttpClient) { }

  // declare token get with httpheaders in localstorage function
    getToken(){

      this.userToken = localStorage.getItem('token');

      let userHeader = new HttpHeaders({'token':`${this.userToken}`});

      return userHeader;

    }


    // declare foodItems get api function call
    getFoods():Observable<any>{

      let header = this.getToken();

      return this.http.get(`${this.foodItemsAPI_URL}/foods`,{'headers':header});
      
    }
 
}
