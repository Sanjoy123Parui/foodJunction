import { Component, OnInit } from '@angular/core';
// import order api service
import { AdminOrdersApiService } from '../services/admin-orders-api.service';
// import toastr service
import { ToastrService } from 'ngx-toastr';
// import fontawesome 
import { faEye, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
// import router
import { Router } from '@angular/router';
// import spinner
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  
  // define fontawesome icon
  eyeIcon = faEye;
  trashIcon = faTrash;
  timesIcon = faTimes;

  public orderData:any = [];
  public orderItems:any = []
  public selectedOrders:any = [];

  public searchCustomers:string = '';

  // pagination declare
  public totalRows:number = 0;
  public startLinkIndex:number = 1;

  // declare dipendency class inject
  constructor(private toastr:ToastrService, public router:Router, 
    public spinner:NgxSpinnerService, private orderService:AdminOrdersApiService) { }

  // declare orders view
  ordersView(){
      // call api
      this.orderService.getOrders().subscribe({
        next:(res:any)=>{
          this.orderData = res.data;
          this.orderItems = this.orderData;
        },
        error:(err:any)=>{
          throw err;
        }
      });
  }

  // component loaded there in memory
  ngOnInit(): void {
    this.ordersView();

    this.totalRows = this.orderData.length;
  }


  // navigate from another component with routes
  onDashboard(){
    this.router.navigate(['/admindashboard/dashboard'])
  }
  

  // select data
  onSelect(data:any){
      this.selectedOrders = data;
  }


  // delete orders
  onDeleteorders(){

      this.spinner.show();

      setTimeout(()=>{
        
        this.spinner.hide();

        this.orderService.deleteOrders(this.selectedOrders._id)
        .subscribe({
          next:(res:any)=>{
            this.toastr.success(res.message);
            this.ordersView();
            this.selectedOrders = [];
          },
          error:(err:any)=>{
            throw err;
          }
        })
      },3000);
  }

}
