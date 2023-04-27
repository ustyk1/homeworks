import { Component, Input, OnInit } from '@angular/core';
import { DataService, IUser } from '../services/user.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-card0228',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() users: IUser[] | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe(users => {
        this.users = users;
        // console.log('this.users', this.users);
      });
  }
}
