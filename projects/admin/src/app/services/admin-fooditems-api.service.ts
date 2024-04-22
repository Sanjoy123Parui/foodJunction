import { Injectable } from '@angular/core';

// import httpclient library
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import rxjs libray
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminFooditemsApiService {

  // declare api url
  private foodAPI_URL:string ='https://foodsorder-rest-api.glitch.me/foodapi';

  // declare token
  private token:any = '';

  // dipendency class inject
  constructor(private http:HttpClient) { }

  // declare call function get token with header from localstorage
  getToken(){
    this.token = localStorage.getItem('token');
    
    let adminHeader = new HttpHeaders({'token':`${this.token}`});

    return adminHeader;
  }

  // call food items get api function
  getFoods():Observable<any>{
    
    let header = this.getToken();

    return this.http.get(`${this.foodAPI_URL}/foods`, {'headers':header});
  }

  // call food items post api function
  postFoods(foodData:any):Observable<any>{
    
    let header = this.getToken();

    return this.http.post(`${this.foodAPI_URL}/food`,foodData,{'headers':header});
  }

  // call food items image chage post api function
  postfoodsImage(food_id:any, data:File):Observable<any>{

    let header = this.getToken();

    let formData = new FormData();

    formData.append('avatar', data);

    return this.http.post(`${this.foodAPI_URL}/food/changePic/${food_id}`, formData, {'headers':header});
  }

  // call food items put api function
  putFoods(food_id:any, foodData:any):Observable<any>{
    
    let header = this.getToken();

    return this.http.put(`${this.foodAPI_URL}/food/${food_id}`, foodData, {'headers':header});
  }

  // call food items delete api function
  deleteFoods(food_id:any):Observable<any>{
    
    let header = this.getToken();

    return this.http.delete(`${this.foodAPI_URL}/food/${food_id}`, {'headers':header});
  }

}
