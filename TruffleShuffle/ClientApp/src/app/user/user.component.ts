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
  startWeight: number;
  percent: number;
  goalProgress: number;

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

    this.weightData.GetOldestWeightRecord(1).subscribe(
      (data: WeightRecord) => {
        this.startWeight = data.currentWeight;
      },
      error => console.error(error)
    );
    this.percent = this.getWeightPercentCSS();
  }

  getWeightToGoal() {
    if (this.currentWeight < this.user.weightLossGoal) {
      return 0;
    } else {
      return this.currentWeight - this.user.weightLossGoal;
    }
  }

  getCurrentWeight() {
    return this.currentWeight;
  }
  getGoalProgress() {
    return this.currentWeight - this.user.weightLossGoal;
  }
  startingGoal() {
    return this.startWeight - this.user.weightLossGoal;
  }

  getWeightPercent() {
    return Math.round((this.getGoalProgress() / this.startingGoal()*100));
  }
  getWeightPercentCSS() {
    return (360 * this.getWeightPercent()) / 100;
}


}
