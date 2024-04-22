import { Component, OnInit } from '@angular/core';

// import cartapi service component
import { CartsApiService } from '../services/carts-api.service';

// import ordersapi service
import { OrdersApiService } from '../services/orders-api.service';

// import fontawesome library
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// import toastservice library
import { ToastrService } from 'ngx-toastr';

// import ngx-spinner service library
import { NgxSpinnerService } from 'ngx-spinner';

// import router service library
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-cart',
  templateUrl: './customers-cart.component.html',
  styleUrls: ['./customers-cart.component.css']
})
export class CustomersCartComponent implements OnInit {

  // declare fontawesome icons
  trash = faTrash;

  // declare cartList items
  public cartList:any = [];

  // declare cartData length
  public cartData:any = [];

  // declare seclected items 
  public selectedCartItems:any = [];

  // declare totalPrice data
  public totalPrice:any = 0;

  // declare dipendency class inject
  constructor(public spinner:NgxSpinnerService, private orderService:OrdersApiService, private cartService:CartsApiService, private toastr:ToastrService, public router:Router) { }

  // declare cart item view function
  onCartview(){


    // declare userData
    let userInfo = localStorage.getItem('user_Id');

    // call api
    this.cartService.cartGet(userInfo).subscribe({
      next:(res:any)=>{

        this.cartList = res.data;
        this.totalPrice = res.data;
        this.cartData = this.cartList;
      },
      error:(err:any)=>{
        throw err;
      }
    });

  }

  // components load in memory
  ngOnInit(): void {

    this.onCartview();
  }

  // declare redirect navigate foods page
  onFoodS(){
    
    this.spinner.show();

    setTimeout(()=>{
      
      this.spinner.hide();
      
      this.router.navigate(['/customersfooditems/fooditems']);
    },3000);

  }


  // declare select cart items function
  onSelectCart(cartItems:any){
    this.selectedCartItems = cartItems;
  }

  // declare remove cart items function
  onRemovecart(){

    this.spinner.show();

    let usersInfo = localStorage.getItem('user_Id');

    let total = this.selectedCartItems.food_id.food_price*this.selectedCartItems.orderqty;

    setTimeout(()=>{

      this.spinner.hide();
      
      //  call api
      this.cartService.cartDelete(usersInfo, this.cartData._id, this.selectedCartItems._id, this.selectedCartItems.food_id._id)
      .subscribe({
        next:(res:any)=>{
          this.totalPrice = res.totalprice-total;
          this.toastr.success(res.message);
          this.onCartview();
          this.selectedCartItems = [];
        },
        error:(err:any)=>{
          throw err
        }
      });

    },3000);
    
  }

  // declare place order function
  onPlaceorder(){

    this.spinner.show();

    let userInfo = localStorage.getItem('user_Id');

    setTimeout(()=>{

      this.spinner.hide();

      // call api
      this.orderService.orderPost(userInfo,this.cartData._id)
      .subscribe({
        next:(res:any)=>{
          this.router.navigate(['/customersorders/orders'])
          this.toastr.success(res.message);
          this.onCartview();
        },
        error:(err:any)=>{
          throw err;
        }
      })

    },3000);
  }

}
