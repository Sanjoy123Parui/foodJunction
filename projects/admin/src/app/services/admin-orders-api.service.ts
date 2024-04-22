import { Injectable } from '@angular/core';

// import http service
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import rxjs library
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersApiService {

  // declare backend api url
  private ordersAPI_URL:string = 'https://foodsorder-rest-api.glitch.me/orderapi';

  private token:any = '';

  // dipendency inject class in service
  constructor(private http:HttpClient) { }

  // declare get token function
  getToken(){
    this.token = localStorage.getItem('token');

    let adminHeader = new HttpHeaders({'token':`${this.token}`});

    return adminHeader;
  }

  // declare get orders 
  getOrders():Observable<any>{
    let header = this.getToken();
    return this.http.get(`${this.ordersAPI_URL}/adminorderview`,{'headers':header});
  }

  // declare delete orders
  deleteOrders(order_id:any):Observable<any>{

    let header = this.getToken();

    return this.http.delete(`${this.ordersAPI_URL}/clearhistory/${order_id}`,{'headers':header});
  }
}
