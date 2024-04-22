import { Component, OnInit } from '@angular/core';

// import fontawesome library
import { faBars, faHome, faQuestionCircle, faUtensils, faTruck, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// import router library
import { Router } from '@angular/router';

// import ngx-spinner library
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // declare icons
    sideBar = faBars;
    home = faHome;
    question = faQuestionCircle;
    foods = faUtensils;
    orders = faTruck;
    contact = faPhone;
    shopCart = faShoppingCart;
  
  // declare toggle data
  public toggleMenu:boolean = false;

  // declare active user data
  public userActive:any = '';

  // dipendency class inject
  constructor(public router:Router, public spinner:NgxSpinnerService, private toastr:ToastrService){}

  // declare active user function
  userPopulate(){
      this.router.events.subscribe({
        
        next:(res:any)=>{

          if(res.url){

            this.userActive = localStorage.getItem('user');

          }
        },
        error:(err:any)=>{
          throw err;
        }

      });
  }



  ngOnInit(): void {
    this.userPopulate();
  }

  // toggle sidenav function
  sideNavToggle(){
    this.toggleMenu =! this.toggleMenu;
  }

  // declare functon navigate customer signup component with router
  onCustomerSignup(){
    this.router.navigate(['/customerssignup/signup']);
  }


  // declare function user signout
  onSignout(){

    this.spinner.show();

    setTimeout(()=>{
      
      this.spinner.hide();

      localStorage.clear();

      this.router.navigate(['/customershome/home']);

      this.userActive = '';

      this.toastr.success('user logout successfully');

    },3000);
  }


  // declare navigate cart omponent wih router function
  onCart(){

    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();

      this.router.navigate(['/customerscart/cart']);
    },3000);
  }


}
