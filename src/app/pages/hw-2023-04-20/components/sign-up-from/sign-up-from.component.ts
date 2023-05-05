import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyValidators } from '../../validators/my.validators';
import { StorageService } from '../../services/storage.service';

export interface IFormData {
  firstName: string, 
  lastName: string,
  email: string,
  secretWord: string,
  password: {passwordValue: string, confirmPasswordValue: string},
}

@Component({
  selector: 'app-sign-up-from',
  templateUrl: './sign-up-from.component.html',
  styleUrls: ['../../common/common-styles.scss', './sign-up-from.component.scss']
})
export class SignUpFromComponent implements OnInit {
  
  isSignedUp = false;
  isInitial = true;

  form = this.fb.group({
    firstName: ['', [
      Validators.required, 
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z]+$/)
    ]],
    lastName: ['', [
      Validators.required, 
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z]+$/)
    ]],
    email: ['', [
      Validators.required, 
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]],
    secretWord: ['', [Validators.required, Validators.minLength(2)]],
    password: this.fb.group({
      passwordValue: ['', [
        Validators.required, 
        Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})/)
      ]],
      confirmPasswordValue: ['', [Validators.required]]
    }, {validator: MyValidators.matchPassword}),
  })
  
  
  constructor(
    public fb: FormBuilder, 
    private storage: StorageService) {}
    
  get signUpForm() {
    return this.form.controls;
  }
    
  private _resetForm() {
    this.form.reset();
  }

  ngOnInit() {}

  onSubmit() {
    const formData = this.form.value as IFormData;
    this.isSignedUp = this.storage.isSignedUp(formData.email);

    if (!this.isSignedUp) {
      const { 
        firstName, 
        lastName,
        email,
        secretWord,
        password: {passwordValue, confirmPasswordValue},
      } = formData;
  
      const user = {
        id: formData.email,
        firstName, 
        lastName,
        email,
        secretWord,
        passwordValue,
        confirmPasswordValue
      } 
      
      this.storage.create(user);
      this._resetForm();
      this.isInitial = false;
    } else {
      this._resetForm();
    }
  }
}
