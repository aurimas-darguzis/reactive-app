import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService, User } from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.users$ = this.usersService.users$;
    this.usersService.loadUsers();
  }

  resetUser() {
    const emptyUser: User = { id: null, name: '', bio: ''};
    this.selectedUser = emptyUser;
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  saveUser(user: User) {
    this.usersService.saveUser(user);
    this.resetUser();
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user);
    this.resetUser();
  }

}
