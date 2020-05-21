import { Component } from '@angular/core';
import { WeightRecord } from '../interfaces/weight-record';
import { WeightService } from '../services/weight.service';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
    selector: 'app-weight-records-list',
    templateUrl: './weight-records-list.component.html',
    styleUrls: ['./weight-records-list.component.scss']
})
/** weight-records-list component*/
export class WeightRecordsListComponent {

  weightRecords: WeightRecord[];
  user: User;

    /** weight-records-list ctor */
  constructor(private weightData: WeightService, private userData: UserService) { }

  ngOnInit() {
    this.weightData.getWeightsOfUserByID(1).subscribe(
      (data: WeightRecord[]) => {
        this.weightRecords = data;
      },
      error => console.error(error)
    );
    this.userData.getUserByID(1).subscribe(
      (data: User) => {
        this.user = { ...data };
      },
      error => console.error(error)
    );

  }

  displayDate(record: WeightRecord): string {
    let output: string = '';
    output += new Date(record.weightInDate).getMonth() + 1;
    output += '/';
    output += new Date(record.weightInDate).getDate() + 1;
    output += '/';
    output += new Date(record.weightInDate).getFullYear() + 1;

    return output;
  }

  displayWeightLossGoal() {
    return this.user.weightLossGoal;
  }


}
