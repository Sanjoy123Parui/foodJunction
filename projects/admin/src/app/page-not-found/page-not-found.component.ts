import { Component, OnInit } from '@angular/core';

// import router library
import { Router } from '@angular/router';

// import fontawesome library
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

// import Spinner module
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  // declare fontawesome icons
  redoAlt = faRedoAlt;

  constructor(private router:Router, public spinner:NgxSpinnerService) { }

  // call function back page
  onReload(){
    this.spinner.show();

    // declare admin
    let adminToken = localStorage.getItem('token');

    setTimeout(()=>{
      this.spinner.hide();

      if(!adminToken){
        this.router.navigate(['/adminhome/home']);
      }
      else{
        this.router.navigate(['/admindashboard/dashboard']);
      }
    })
  }

  ngOnInit(): void {
  }

}
