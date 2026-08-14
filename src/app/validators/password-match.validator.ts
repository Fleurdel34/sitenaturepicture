import{AbstractControl,ValidationErrors,ValidatorFn, FormGroup} from '@angular/forms';

export const passwordMatchValidator:ValidatorFn=(group: AbstractControl<FormGroup>): ValidationErrors | null => {
    const password=group.get('password')?.value;
    const confirmPassword=group.get('confirmPassword')?.value;

    if(password && confirmPassword && password!==confirmPassword){
        return {passwordMismatch:true};
    }
    return null;
};

