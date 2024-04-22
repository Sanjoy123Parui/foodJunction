import { Injectable } from '@angular/core';

// import http library
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import rxjs library
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsApiService {

  // declare backen api url
  private cartsAPI_URL:string = 'https://foodsorder-rest-api.glitch.me/cartapi';

  // declare token
  private userToken:any = '';

  // declare dipendency class inject
  constructor(private http:HttpClient) { }

  // declare token get function
  getToken(){

    this.userToken = localStorage.getItem('token');

    let userHeader = new HttpHeaders({'token':`${this.userToken}`});

    return userHeader;
  }

  // declare cartview data get api function
  cartGet(user_id:any):Observable<any>{

    let header = this.getToken();

    return this.http.get(`${this.cartsAPI_URL}/cartview/${user_id}`,{'headers':header});

  }

  // declare addtocart data post api function
  cartPost(user_id:any, food_id:any, totalPrice:number, orderqty:number):Observable<any>{

    let header = this.getToken();

    return this.http.post(`${this.cartsAPI_URL}/addtocart/${user_id}/${food_id}`,{'totalPrice':totalPrice, 'orderqty':orderqty},{'headers':header});

  }


  // declare cartremove data delete api function
  cartDelete(user_id:any, cart_id:any, items_id:any, food_id:any):Observable<any>{
    
    let header = this.getToken();

    return this.http.delete(`${this.cartsAPI_URL}/cartremove/${user_id}/${cart_id}/${items_id}/${food_id}`,{'headers':header});
    
  }

}
