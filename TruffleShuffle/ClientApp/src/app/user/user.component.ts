import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
/** user component*/
export class UserComponent {
    /** user ctor */
  constructor(private UserData: UserService) { }

  users: User[];

  loadPage() {
    this.UserData.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      error => console.error(error)
    );
  }

  ngOnInit() {
    this.loadPage();
  }


}
