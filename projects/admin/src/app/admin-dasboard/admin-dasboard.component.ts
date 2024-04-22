import { Component, OnInit } from '@angular/core';

// import router library
import { Router } from '@angular/router';

// import ngx-spinner library
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css']
})
export class AdminDasboardComponent implements OnInit {

  constructor(private router:Router, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  // navigate with router from fooditems component
    onItems(){
      
      // spinner show
      this.spinner.show();

      // time event
      setTimeout(()=>{
        // spinner hide
          this.spinner.hide();

          this.router.navigate(['/adminfoodsitem/foodsitem']);
      },3000);
    }

  // navigate with router from orders component
    onOrders(){

      this.spinner.show();

      setTimeout(()=>{

        this.spinner.hide();

        this.router.navigate(['/adminorders/orders']);

      },3000);

    }

}
