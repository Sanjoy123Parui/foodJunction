import { Component, OnInit } from '@angular/core';

// import ordersapi service
import { OrdersApiService } from '../services/orders-api.service';

// import router library
import { Router } from '@angular/router';

// import ngx-spinner library
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service library
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-orders',
  templateUrl: './customers-orders.component.html',
  styleUrls: ['./customers-orders.component.css']
})
export class CustomersOrdersComponent implements OnInit {

  // declare orderLists data items
  public orderData:any = [];

  // declare selected data items
  public selectedOrderdata:any = [];


  // declare dipendency class inject
  constructor(public router:Router, private orderService:OrdersApiService, public spinner:NgxSpinnerService, 
    private toastr:ToastrService) { }

  // view order data
  onVieworder(){

    // declare user data
    let usersInfo = localStorage.getItem('user_Id');
    
    // call api
    this.orderService.orderGet(usersInfo).subscribe({
      next:(res:any)=>{
        this.orderData = res.data;
      },
      error:(err:any)=>{
        throw err;
      }
    });

  }

  ngOnInit(): void {
    this.onVieworder();
  }

  // declare redirect navigate back component with router function
  onBack(){

    this.spinner.show();

    setTimeout(()=>{

      this.spinner.hide();

      this.router.navigate(['/customersfooditems/fooditems']);

    },3000);
  }

  // declare selected data
  onSelectOrder(orderInfo:any){
    this.selectedOrderdata = orderInfo;
  }


  // declare cancel order function
  onCancelorder(){

    this.spinner.show();

    // declare user data
    let usersInfo = localStorage.getItem('user_Id');

    setTimeout(()=>{
      
      this.spinner.hide();

      // call api
      this.orderService.orderCancelPost(this.selectedOrderdata._id, usersInfo)
      .subscribe({

        next:(res:any)=>{

          this.toastr.success(res.message);
          this.onVieworder();
          this.selectedOrderdata = [];

        },
        error:(err:any)=>{
          throw err
        }

      });

    },3000);
  }

}
