import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { WeightService } from '../services/weight.service';
import { WeightRecord } from '../interfaces/weight-record';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
/** user component*/
export class UserComponent {
    /** user ctor */
  constructor(private userData: UserService, private weightData:WeightService) { }

  user: User;
  currentWeight: number;

  ngOnInit() {
    this.userData.getUserByID(1).subscribe(
      (data: User) => {
        this.user = { ...data };
      },
      error => console.error(error)
    );

    this.weightData.getNewestWeightOfUserByID(1).subscribe(
      (data: WeightRecord) => {
        this.currentWeight = data.currentWeight;
    },
      error => console.error(error)
    );
  }

  getWeightToGoal() {
    if (this.currentWeight < this.user.weightLossGoal) {
      return 0;
    } else {
      return this.currentWeight - this.user.weightLossGoal;
    }
  }


}
