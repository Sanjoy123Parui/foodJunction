import { AbstractControl } from "@angular/forms";

export function adminCheckPass(control:AbstractControl): any{
    
    // declare admin change password cross validations
    let admin_pass = control.get('admin_pass')?.value;
    let admin_confirmpass = control.get('admin_confirmpass')?.value;
    let adminMatchpass = false;

    if(admin_pass == admin_confirmpass){
        adminMatchpass = false
    }else{
        adminMatchpass = true;
    }

    if(adminMatchpass){
        return {'adminMatchpass':true}
    }
    else{
        return null;
    }
}