import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-sign-in-from',
  templateUrl: './sign-in-from.component.html',
  styleUrls: ['../../common/common-styles.scss', './sign-in-from.component.scss']
})
export class SignInFromComponent implements OnInit {

  showMessage = false;
  isInitial = true;

  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private router: Router, 
    public fb: FormBuilder, 
    private storage: StorageService) { }

  ngOnInit() { }

  onSubmit() {
    const {login, password} = this.form.value;

    if (
      this.storage.isSignedUp(login!) && 
      this.storage.isConfirmedPassword(login!, password!)
    ) {
      this.showMessage = false;
      const user = this.storage.get(login!);
      this.storage.setCurrentUser(user);
      this.router.navigate(['./hw-2023-04-20/profile']);
    } else {
      this.isInitial = false;
      this.showMessage = true;
      this.form.reset();
    }
  }
}
