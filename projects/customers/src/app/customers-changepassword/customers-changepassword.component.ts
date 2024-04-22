import { Component, OnInit } from '@angular/core';

// import fontawesome icons library
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// import usersignupapi service
import { UsersSignupApiService } from '../services/users-signup-api.service';

// import reactiveforms controls library
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import user password validations control component
import { userCheckPass } from './validations/user-check-pass';

// import router library
import { Router } from '@angular/router';

// import ngx-spinner service library
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service library
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-changepassword',
  templateUrl: './customers-changepassword.component.html',
  styleUrls: ['./customers-changepassword.component.css']
})
export class CustomersChangepasswordComponent implements OnInit {

  // declare icons library
  times = faTimes;
  eye = faEye;
  eyeSlash = faEyeSlash;

  // declare password show or hide
  public showhidePassword:boolean = true;

  // decalre user password change data
  public userformData:any = [];

  // declare dipendency class inject
  constructor(public router:Router, private userService:UsersSignupApiService, public spinner:NgxSpinnerService, 
    private toastr:ToastrService, private formBuild:FormBuilder) { 

      // declare model user password update
      this.userformData = this.formBuild.group({
        'user_email':['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        'user_pass':['', [Validators.required, 
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
        'user_confirmpass':['', [Validators.required, 
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
      }, {validator:userCheckPass});

  }

  // declare resetForm function
  resetForm(){
    this.user_email.setValue('');
    this.user_pass.setValue('');
    this.user_confirmpass.setValue('');

    this.user_email.touched;
  }

  ngOnInit(): void {
  }

  // declare colose user password change form function
  onCloseform(){
    this.router.navigate(['/customerssignup/signup']);
  }

  // declare show/hide password toggle
  togglePasswordVisibility(){
    this.showhidePassword =! this.showhidePassword;
  }


  // declare get data with methods in form
  public get user_email(){
    return this.userformData.get('user_email') as FormControl;
  }

  public get user_pass(){
    return this.userformData.get('user_pass') as FormControl;
  }

  public get user_confirmpass(){
    return this.userformData.get('user_confirmpass') as FormControl;
  }

  // declare user password change function
  onPasschange(){
    
    this.spinner.show();

    setTimeout(()=>{

      this.spinner.hide();

      // call api 
      this.userService.resetPassPost(this.userformData.value)
      .subscribe({

        next:(res:any)=>{

          this.toastr.success(res.message);
          this.resetForm();

        },
        error:(err:any)=>{

          throw err;

        }

      });
  
    },3000);
  }

}
