import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-from',
  templateUrl: './sign-in-from.component.html',
  styleUrls: ['../../common/common-styles.scss', './sign-in-from.component.scss']
})
export class SignInFromComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
}
