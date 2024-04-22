import { AbstractControl } from "@angular/forms";

export function userCheckPass(control:AbstractControl):any{

    // declare password validation controls
    let user_pass = control.get('user_pass')?.value;
    let user_confirmpass = control.get('user_confirmpass')?.value;
    let userMatchPass = false;

    if(user_pass == user_confirmpass){
        userMatchPass = false;
    }
    else{
        userMatchPass = true
    }

    if(userMatchPass){
        return {'userMatchPass':true};
    }
    else{
        return null;
    }

}