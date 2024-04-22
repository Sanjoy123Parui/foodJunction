import { Component, OnInit, ViewChild } from '@angular/core';

// import router library
import { Router } from '@angular/router';

// import ngx-spinner service component
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service component
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // declare admin active
  public adminActive:any = '';

  // dipendency inject
  constructor(private router:Router, private spinner:NgxSpinnerService, private toastr:ToastrService){}

  // active admin view function
    adminPopulate(){
      this.router.events.subscribe({
        next:(res:any)=>{

          if(res.url){
              this.adminActive = localStorage.getItem('admin');
          }

        },
        error:(err:any)=>{
          throw err;
        }
      });
    }
  

  ngOnInit(): void {
      this.adminPopulate();
  }

  // after login navigate with router in another component
  onAdminsignup(){
    this.router.navigate(['/adminsignup/signup']);
  }

  // logout function call
    onSignout(){
      // spinner show
      this.spinner.show();
      
      // timeevent
      setTimeout(()=>{
        
        // spinner hide
        this.spinner.hide();

        localStorage.clear();

        this.router.navigate(['/adminhome/home']);

        this.adminActive = '';

        this.toastr.success('admin logout successfully');

      },3000);
    }

}
