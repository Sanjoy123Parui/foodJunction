import { Component, OnInit } from '@angular/core';

// import router library
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  // dipendency inject class
  constructor(private router:Router) { }

  // router link function
  onAdminsignup(){
    this.router.navigate(['/adminsignup/signup']);
  }

  ngOnInit(): void {
  }

}
