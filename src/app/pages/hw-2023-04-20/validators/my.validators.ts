import { AbstractControl } from '@angular/forms'

export class MyValidators {
  
  static matchPassword(abstractControl: AbstractControl): {[key: string]: boolean} | null {
    const password = abstractControl.get('passwordValue')?.value;
    const confirmPassword = abstractControl.get('confirmPasswordValue')?.value;

    return (password !== confirmPassword) ? {matchPassword: true} : null;
  }  
}
