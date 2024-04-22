import { Component, OnInit } from '@angular/core';

// import reactiveform library
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import adminsignupapi service
import { AdminSignupApiService } from '../services/admin-signup-api.service';

// import fontawesome library
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// import cross validation component
import { adminCheckPass } from './validations/admin-check-pass';

// import router library
import { Router } from '@angular/router';

// import NgxSpinner service 
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-changepassword',
  templateUrl: './admin-changepassword.component.html',
  styleUrls: ['./admin-changepassword.component.css']
})
export class AdminChangepasswordComponent implements OnInit {

  // declare icon
  times = faTimes
  eye = faEye;
  eyeSlash = faEyeSlash;

  // declare entire form data 
  public adminchangePassform:any = [];

  // declare password show or hide
  public hidePassword: boolean = true;

  constructor(private router:Router, private formBuild:FormBuilder, private adminService: AdminSignupApiService , 
    public spinner:NgxSpinnerService, private toastr:ToastrService) {

    this.adminchangePassform = this.formBuild.group({
      'admin_email':['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'admin_pass':['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      'admin_confirmpass':['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
    },{validator:adminCheckPass});

  }

  // reset form
  resetForm(){
    this.admin_email.setValue('');
    this.admin_pass.setValue('');
    this.admin_confirmpass.setValue('');
  }

  ngOnInit(): void {
  }

  // close form function call
    onCloseForm(){
      this.router.navigate(['/adminsignup/signup']);
    } 

  // declare  password show/hide function
    togglePasswordVisibility(){
        this.hidePassword = ! this.hidePassword;
    }

  // declare get value of form
    public get admin_email(){
      return this.adminchangePassform.get('admin_email') as FormControl;
    }

    public get admin_pass(){
      return this.adminchangePassform.get('admin_pass') as FormControl;
    }

    public get admin_confirmpass(){
      return this.adminchangePassform.get('admin_confirmpass') as FormControl;
    }

  // declare admin change password function call
  onChangepass(){

    // spinner show
    this.spinner.show();

    // call timeEvent function
    setTimeout(()=>{
      // hide spinner
      this.spinner.hide();

      // call api with service from admin password change
      this.adminService.adminforgetPassword(this.adminchangePassform.value)
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
