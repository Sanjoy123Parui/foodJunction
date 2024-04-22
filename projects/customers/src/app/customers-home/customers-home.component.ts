import { Component, OnInit } from '@angular/core';

// import router library
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.css']
})
export class CustomersHomeComponent implements OnInit {

  // dipendency class inject
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  // declare function navigate customer signup component with router
  onCustomerSignup(){
    this.router.navigate(['/customerssignup/signup']);
  }

}
