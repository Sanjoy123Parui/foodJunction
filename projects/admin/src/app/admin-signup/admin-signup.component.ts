import { Component, OnInit } from '@angular/core';

// import reactive form library
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import adminsignupapi service component
import { AdminSignupApiService } from '../services/admin-signup-api.service';

// import router library
import { Router } from '@angular/router';

// impor admin model
import { Admin } from './model/admin';

// import cross validation component
import { adminPassMatch } from './validations/admin-pass-match';

// import fontawesome package
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// import ngx-spinner service
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr library
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  // declare icons
  times = faTimes;
  eye = faEye;
  eyeSlash = faEyeSlash;

  // declare signin form entire data
  public adminForm:any = [];

  // declare signup form entire data
  public adminSignupForm:any = [];

  // declare password show or hide
  public hidePassword: boolean = true;

  // dipendency inject
  constructor(private router:Router, private adminService:AdminSignupApiService, private spinner:NgxSpinnerService, 
    private toastr:ToastrService, private formBuild:FormBuilder) {

    // declare admin signup data
    this.adminSignupForm = this.formBuild.group({
      'admin_name':['', [Validators.required]],
      'admin_email':['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'admin_phone':['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      'admin_pass':['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      'admin_confirmpass':['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
    },{validator:adminPassMatch});

    // declare admin signin data
    this.adminForm = new Admin('','');
  }
   
  //  declare admin signin form function
    resetSignin(){
      this.adminForm = new Admin('', '');
    }

  //  declare reset signup form function
   resetSignup(){
      this.admin_name.setValue('');
      this.admin_email.setValue('');
      this.admin_phone.setValue('');
      this.admin_pass.setValue('');
      this.admin_confirmpass.setValue('');
      
      this.admin_name.touched;
   }

   

  // call visiblity password
  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  // close form function call 
  oncloseForm(){
    this.router.navigate(['/adminhome/home']);
  }

  ngOnInit(): void {
  }

  // admin signin function call
  onSignin(){
    // spinner show there 
    this.spinner.show();

    setTimeout(() => {
      //  spinner hide there
      this.spinner.hide();

      // call admin signin api
      this.adminService.adminLogin(this.adminForm)
      .subscribe({

        next:(res:any)=>{

          if(res.message == "admin login successfully"){

            // declare set the localstorage item
            localStorage.setItem('admin',res.adminActive);
            localStorage.setItem('token',res.token);

            // navigate with router from another component
            this.router.navigate(['/admindashboard/dashboard']);

            // declare message with toastr alert
            this.toastr.success(res.message);
            
            this.resetSignin();

          }
          else{
            this.toastr.error(res.message);
            this.resetSignin();
          }
        },
        error:(err:any)=>{
          throw err;
        }

      });

    }, 3000);
  }


  // admin signup data get
  public get admin_name(){
    return this.adminSignupForm.get('admin_name') as FormControl;
  }

  public get admin_email(){
    return this.adminSignupForm.get('admin_email') as FormControl;
  }

  public get admin_phone(){
    return this.adminSignupForm.get('admin_phone') as FormControl;
  }

  public get admin_pass(){
    return this.adminSignupForm.get('admin_pass') as FormControl;
  }

  public get admin_confirmpass(){
    return this.adminSignupForm.get('admin_confirmpass') as FormControl;
  }

  // admin signup function call
  onSignup(){
      
    // spinner show there
    this.spinner.show();

    // timeevent function
    setTimeout(()=>{

      // spinner hide there
      this.spinner.hide();

      // call admin signup api data
      this.adminService.adminRegister(this.adminSignupForm.value)
      .subscribe({
        next:(res:any)=>{
          this.toastr.success(res.message);
          this.resetSignup();
        },
        error:(err:any)=>{
          throw err;
        }
      });

    },3000);
  }

}
