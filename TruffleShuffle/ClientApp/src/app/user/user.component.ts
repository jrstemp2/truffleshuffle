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

  user: User;
  currentWeight: number;

  ngOnInit() {
    // Mock Data
    this.user = { //TODO: need to change to use API
      id: 1,
      userName: 'Goonies4Life',
      displayName: 'Chunk',
      weightLossGoal: 200,
    }

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
