import { AbstractControl } from "@angular/forms";

export function adminPassMatch(control:AbstractControl):any{

    // declare admin cross validations
    let admin_pass = control.get('admin_pass')?.value;
    let admin_confirmpass = control.get('admin_confirmpass')?.value;

    let adminMisMatchPass = false;

    if(admin_pass == admin_confirmpass){
        adminMisMatchPass = false;
    }
    else{
        adminMisMatchPass = true;
    }

    if(adminMisMatchPass){
        return {'adminMisMatchPass':true}
    }
    else{
        return null;
    }
}