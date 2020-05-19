import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
/** user component*/
export class UserComponent {
    /** user ctor */
  constructor(private userData: UserService) { }

  user: User;
  currentWeight: number;

  ngOnInit() {
    this.userData.getUserByID(1).subscribe(
      (data: User) => {
        this.user = { ...data };
      },
      error => console.error(error)
    );

    // TODO: add service to pull last weight
    // Mock Data
    this.currentWeight = 240; 
  }

  getWeightToGoal() {
    if (this.currentWeight < this.user.weightLossGoal) {
      return 0;
    } else {
      return this.currentWeight - this.user.weightLossGoal;
    }
  }


}
