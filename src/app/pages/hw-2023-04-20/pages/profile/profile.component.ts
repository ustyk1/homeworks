import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../common/common-styles.scss', './profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router, 
    private storage: StorageService
  ) { }

  ngOnInit(): void { }

  onSignOut() {
    this.storage.deleteCurrentUser();
    this.router.navigate(['/hw-2023-04-20/login/sign-in']);
  }

  onDelete() {
    const currentUser = this.storage.getCurrentUser();
    this.storage.delete(currentUser.email)
    this.storage.deleteCurrentUser();
    this.router.navigate(['/hw-2023-04-20/login/sign-up']);
  }
}
