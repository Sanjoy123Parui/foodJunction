import { Component,  OnInit } from '@angular/core';

// import Forms library
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import adminfooditemsapi service
import { AdminFooditemsApiService } from '../services/admin-fooditems-api.service';

// import fontawesome library
import { faPlus, faTimes, faEdit, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

// import ngx-spinner service library
import { NgxSpinnerService } from 'ngx-spinner';

// import toastr service
import { ToastrService } from 'ngx-toastr';

// import toastr library

@Component({
  selector: 'app-admin-foodsitem',
  templateUrl: './admin-foodsitem.component.html',
  styleUrls: ['./admin-foodsitem.component.css']
})
export class AdminFoodsitemComponent implements OnInit {

  // declare icons
  plus = faPlus;
  times = faTimes;
  edit = faEdit;
  trash = faTrash
  upload = faUpload;

  // declare foodList data
  public foodList:any = [];

  // declare totalRows
  public totalRows:number = 0;
  // declare start items
  public startLinkIndex:number = 1;

  // declare searchFooddata
  public searchfoodData:string = '';

  // declare add form food data
  public foodItems:any = [];

  // declare sected food items
  public selectedfoodItems:any = [];

  

  // declare dipendency class inject
  constructor( private formBuild: FormBuilder, private foodService:AdminFooditemsApiService, public spinner:NgxSpinnerService, 
    private toastr: ToastrService) { 

      this.foodItems = this.formBuild.group({
        'food_name':['', [Validators.required]],
        'avatar':['', [Validators.required]],
        'food_desc':['', [Validators.required]],
        'food_price':['', [Validators.required]]
      });
  }

  // reset form
  resetfood(){
    this.food_name.setValue('');
    this.avatar.setValue('');    
    this.food_desc.setValue('');
    this.food_price.setValue('');

    this.food_name.touched;
  }

  // view foodItems function with call api
  onViewfoods(){
    // call api
    this.foodService.getFoods()
    .subscribe({
      next:(res:any)=>{
        this.foodList = res;
      },
      error:(err:any)=>{
        throw err;
      }
    });
  }

  // load the component 
  ngOnInit(): void {

    this.onViewfoods();

    this.totalRows = this.foodList.length;
  }

  // declare foodItems get
  public get food_name(){
    return this.foodItems.get('food_name') as FormControl;
  }

  public get avatar(){
    return this.foodItems.get('avatar') as FormControl;
  }

  public get food_desc(){
    return this.foodItems.get('food_desc') as FormControl;
  }

  public get food_price(){
    return this.foodItems.get('food_price') as FormControl;
  }

  // select foodItems function call with api
    onSelect(event:any){
      let fileData = event.target.files[0];
      this.foodItems.get('avatar').setValue(fileData);
    }


  // add foodItems function call with api
  onAddfoods(){

    // append items in formData
    let formData = new FormData();
    formData.append('food_name', this.foodItems.get('food_name').value);
    formData.append('avatar', this.foodItems.get('avatar').value);
    formData.append('food_desc', this.foodItems.get('food_desc').value);
    formData.append('food_price', this.foodItems.get('food_price').value);

    // spinner show
    this.spinner.show();

    // time event call
    setTimeout(()=>{
      
      // spinner hide
      this.spinner.hide();

      // call api
      this.foodService.postFoods(formData)
      .subscribe({
        next:(res:any)=>{

          this.toastr.success(res.message);
          this.onViewfoods();
          this.resetfood();
        },
        error:(err:any)=>{
          throw err;
        }
      });
      
    },3000);

  }


  // declare select items function
  onselectItems(foodItem:any){
    this.selectedfoodItems = foodItem;
    this.foodItems.patchValue(foodItem);
  }

  // declare update food image function
  onChangeimage(event:any){

    let fileInfo = event.target.files[0];

    // call api
    this.foodService.postfoodsImage(this.selectedfoodItems._id, fileInfo)
    .subscribe({
      next:(res:any)=>{
        this.toastr.success(res.message);
        this.onViewfoods();
        this.selectedfoodItems = [];
      },
      error:(err:any)=>{
        throw err;
      }
    });

  }


  // declare update foods items function
  onEditfoods(){

    // spinner show 
    this.spinner.show();

    // time event
    setTimeout(()=>{

      // spinner hide
      this.spinner.hide();

      // call api
      this.foodService.putFoods(this.selectedfoodItems._id, this.foodItems.value)
      .subscribe({
        next:(res:any)=>{
            this.toastr.success(res.message);
            this.onViewfoods();
            this.resetfood();
            this.selectedfoodItems = [];
        },
        error:(err:any)=>{
          throw err;
        }
      });

    },3000);

  }


  // declare delete food items function
  onDeletfoods(){

    // spinner show
    this.spinner.show();

    // time event call
    setTimeout(()=>{
      
      // spinner hide
      this.spinner.hide();

      this.foodService.deleteFoods(this.selectedfoodItems._id)
      .subscribe({

        next:(res:any)=>{
          this.toastr.success(res.message);
          this.onViewfoods();
          this.resetfood();
          this.selectedfoodItems = []
        },
        error:(err:any)=>{
          throw err;
        }
        
      });

    },3000);

  }

}