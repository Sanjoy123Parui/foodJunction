import { Component, OnInit } from '@angular/core';

// import foodItemsapi service component
import { FoodsitemsApiService } from '../services/foodsitems-api.service';

// import cartapi service component
import { CartsApiService } from '../services/carts-api.service';

// import fontawesome library
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

// import ngx-spinner service library
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-fooditems',
  templateUrl: './customers-fooditems.component.html',
  styleUrls: ['./customers-fooditems.component.css']
})
export class CustomersFooditemsComponent implements OnInit {

  // declare fontaesome icons
  plus = faPlus;
  minus = faMinus;

  // declare foodList items
  public foodList:any = [];

  // declare foodData items
  public foodData:any = [];

  // declare selected foodItems data
  public selectedFoods:any = [];

  // declare search foods 
  public searchFoods:string = '';

  // declare orderqty data
  public orderqty:number = 1;

  // declare startLinkindex
  public startLinkIndex:number = 1;

  // declare total rows
  public totalRows:number = 0;
  
  // declare dipendency class inject
  constructor(public spinner:NgxSpinnerService, private cartService:CartsApiService, private foodService:FoodsitemsApiService, private toastr:ToastrService) { }

  // declare foodItems view function
  onfoodView(){

    // call api
    this.foodService.getFoods().subscribe({

      next:(res:any)=>{
        
        this.foodList = res;
        this.totalRows = res.length;
        this.foodData = this.foodList;

      },
      error:(err:any)=>{
        throw err;
      }

    });

  }


  // component loaded in memory
  ngOnInit(): void {
    this.onfoodView();
  }

  // declare selected food items function
  onSelect(foodItem:any){
    this.selectedFoods = foodItem;
    
  }

  // declare  orderqty increment or decrement function
  onCounter(count:boolean):void{

    this.orderqty = count ? this.orderqty+1 : this.orderqty>1 ? this.orderqty-1:1;

  }

  // declare addtocart fooditems function
  onAddtocart(){

    this.spinner.show();

    // declare orderqty countdata
    let countdata = this.orderqty

    // declare totalprice
    let totalPrice = this.selectedFoods.food_price*countdata;

    // declare userData
    let userInfo = localStorage.getItem('user_Id');

    setTimeout(()=>{

      this.spinner.hide();

      // call api
      this.cartService.cartPost(userInfo, this.selectedFoods._id, totalPrice, countdata)
      .subscribe({
        next:(res:any)=>{
          
          this.toastr.success(res.message);
          this.onfoodView();
          this.selectedFoods = [];
        },
        error:(err:any)=>{
          throw err;
        }
      });

    },3000);

  }

}
