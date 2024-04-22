import { Injectable } from '@angular/core';

// import http library
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import rxjs library
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  // declare backen api url
  private ordersAPI_URL:string = 'https://foodsorder-rest-api.glitch.me/orderapi';

  // declare token
  private usersToken:any= '';

  // declare dipendency class inject
  constructor(private http:HttpClient) { }

  //declare get token function 
  getToken(){
    
    this.usersToken = localStorage.getItem('token');

    let usersHeader = new HttpHeaders({'token':`${this.usersToken}`});

    return usersHeader;

  }

  // declare order view get api function
  orderGet(user_id:any):Observable<any>{

    let header = this.getToken();

    return this.http.get(`${this.ordersAPI_URL}/userorderview/${user_id}`,{'headers':header});
  }


  // declare orders placed post api function
  orderPost(user_id:any, cart_id:any):Observable<any>{
    
    let header = this.getToken();

    return this.http.post(`${this.ordersAPI_URL}/placeorder`,{'user_id':user_id, 'cart_id':cart_id},{'headers':header});

  }

  // declare orders cancel post api function
  orderCancelPost(order_id:any,user_id:any):Observable<any>{

    let header = this.getToken();

    return this.http.post(`${this.ordersAPI_URL}/cancelorder`,{'order_id':order_id,'user_id':user_id}, {'headers':header});
  }

}
