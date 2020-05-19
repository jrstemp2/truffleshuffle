import { Component, Output } from '@angular/core';
import { WeightRecord } from '../interfaces/weight-record';

@Component({
    selector: 'app-new-weight',
    templateUrl: './new-weight.component.html',
    styleUrls: ['./new-weight.component.scss']
})
/** new-weight component*/
export class NewWeightComponent {
  newRecord: WeightRecord;

    /** new-weight ctor */
  constructor() {
    this.newRecord = {
      id: 0,
      userId: 1,
      weightInDate: new Date(),
      currentWeight: 0,
    }
  }

  submitWeight() {

    console.log(this.newRecord); //TODO: send to weightDataService
  }
}
