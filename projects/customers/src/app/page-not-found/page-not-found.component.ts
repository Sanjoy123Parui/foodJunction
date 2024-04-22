import { Component, OnInit } from '@angular/core';

// import fontawesome library
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

// import router library
import { Router } from '@angular/router';

// import ngx-spinner service library
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  redoAlt = faRedoAlt;

  // dipendency class inject
  constructor(private router:Router, public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  // declare function navigate with route in another component
  onReload(){

    // show spinner
    this.spinner.show();

    let usersToken = localStorage.getItem('token');

    // timeevent function call
    setTimeout(()=>{
      
      // hide spinner
      this.spinner.hide();

      if(!usersToken){
        this.router.navigate(['/customershome/home']);
      }
      else{
        this.router.navigate(['/customersfooditems/fooditems']);
      }

    },3000);
    
  }

}
