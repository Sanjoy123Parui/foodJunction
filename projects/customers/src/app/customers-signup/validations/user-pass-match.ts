import { AbstractControl } from "@angular/forms";

export function userPassmatch(control:AbstractControl):any{

    // declare validations controls

    let user_pass = control.get('user_pass')?.value;
    let user_confirmpass = control.get('user_confirmpass')?.value;

    let userMisMatchPass = false;

    if(user_pass == user_confirmpass){
        userMisMatchPass = false;
    }
    else{
        userMisMatchPass = true;
    }

    if(userMisMatchPass){
        return {'userMisMatchPass':true};
    }
    else{
        return null;
    }
}