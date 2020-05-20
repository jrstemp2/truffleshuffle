import { Component, Output } from '@angular/core';
import { WeightRecord } from '../interfaces/weight-record';
import { WeightService } from '../services/weight.service';

@Component({
    selector: 'app-new-weight',
    templateUrl: './new-weight.component.html',
    styleUrls: ['./new-weight.component.scss']
})
/** new-weight component*/
export class NewWeightComponent {
  userID: number;
  weightInDate: Date;
  currentWeight: number;

<<<<<<< HEAD
    /** new-weight ctor */
  constructor() {
    //this.newRecord = {
    //  id: 0,
    //  userId: 1,
    //  weightInDate: new Date(),
    //  currentWeight: 0,
    //}
  }

  submitWeight() {
=======
  constructor(private weightData: WeightService) {}
  //id: number;
  //userId: number;
  //weightInDate: Date;
  //currentWeight: number;
  submitWeight() {
    this.weightData.addWeightToDB({
      id:0,
      userId: 1,
      weightInDate: new Date(),
      currentWeight: this.currentWeight
>>>>>>> a5f414bf83d48bea137d3e997031e00a959876da

    }).subscribe(
      (data: object) => console.log(data), error => console.error(error));
  }
}
