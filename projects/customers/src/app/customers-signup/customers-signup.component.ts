import { Component, OnInit } from '@angular/core';

// import reactiveforms library
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import usersSignupapi service 
import { UsersSignupApiService } from '../services/users-signup-api.service';

// import fontawesome library
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// import router library
import { Router } from '@angular/router';

// import user model
import { User } from './model/user';

// import password match validations controls
import { userPassmatch } from './validations/user-pass-match';

// import ngx-spinner service library
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service library
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-signup',
  templateUrl: './customers-signup.component.html',
  styleUrls: ['./customers-signup.component.css']
})
export class CustomersSignupComponent implements OnInit {

  // declare fontawesome icons
  times = faTimes;
  eye = faEye;
  eyeSlash = faEyeSlash;

  // declare password show or hide
  public showhidePassword: boolean = true;

  // declare user signup data 
  public userSignupform:any = [];

  // declare user signin data
  public userForm:any = [];
  

  // dipendency class inject
  constructor(public router:Router, private formBuild:FormBuilder, public spinner:NgxSpinnerService, private toastr:ToastrService, 
    private userService:UsersSignupApiService) {
    
    // declare user signup form model
    this.userSignupform = this.formBuild.group({
      'user_name':['', [Validators.required]],
      'user_email':['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'user_phone':['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      'user_pass':['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      'user_confirmpass':['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
    },{validator:userPassmatch});


    // declare user signin form model
    this.userForm = new User('','');

  }


  // declare user signup form reset function
  resetSignup(){
    this.user_name.setValue('');
    this.user_email.setValue('');
    this.user_phone.setValue('');
    this.user_pass.setValue('');
    this.user_confirmpass.setValue('');

    this.user_name.touched;
  }


  // declare user signin form reset function
  resetSignin(){
    this.userForm = new User('','');
  }

  ngOnInit(): void {
  }

  // declare show/hide password toggle
  togglePasswordVisibility(){
    this.showhidePassword = !this.showhidePassword;
  }

  // declare function close form
  onCloseform(){
    this.router.navigate(['/customershome/home']);
  }


  // declare user signup form get value methods
  public get user_name(){
    return this.userSignupform.get('user_name') as FormControl;
  }

  public get user_email(){
    return this.userSignupform.get('user_email') as FormControl;
  }

  public get user_phone(){
    return this.userSignupform.get('user_phone') as FormControl;
  }

  public get user_pass(){
    return this.userSignupform.get('user_pass') as FormControl;
  }

  public get user_confirmpass(){
    return this.userSignupform.get('user_confirmpass') as FormControl;
  }

  // declare user signup function
  onSignup(){
    
    this.spinner.show();

    setTimeout(()=>{

      this.spinner.hide();

      // call api function
      this.userService.signupPost(this.userSignupform.value)
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

  // declare user signin function
  onSignin(){

    this.spinner.show();

    setTimeout(()=>{

      this.spinner.hide();

      // call api function
      this.userService.signinPost(this.userForm)
      .subscribe({

        next:(res:any)=>{
          
          if(res.message == 'user login successfully'){
            // declare localstorage localstorage set data
              localStorage.setItem('user_Id',res.user_id);
              localStorage.setItem('user',res.userActive);
              localStorage.setItem('token', res.token);
            
            //declare navigate component with router after login  
              this.router.navigate(['/customersfooditems/fooditems']);
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


    },3000);
  }

}
