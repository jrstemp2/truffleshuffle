import { Component } from '@angular/core';
import { WeightRecord } from '../interfaces/weight-record';

@Component({
    selector: 'app-weight-records-list',
    templateUrl: './weight-records-list.component.html',
    styleUrls: ['./weight-records-list.component.scss']
})
/** weight-records-list component*/
export class WeightRecordsListComponent {

  weightRecords: WeightRecord[];

    /** weight-records-list ctor */
  constructor() {
    // TODO: add service to get a list of user Records
    // Mock Data
    this.weightRecords = [
      { id: 1, userId: 1, weighInDate: new Date(2020, 5, 1), currentWeight: 245 },
      { id: 2, userId: 1, weighInDate: new Date(2020, 5, 2), currentWeight: 244 },
      { id: 3, userId: 1, weighInDate: new Date(2020, 5, 3), currentWeight: 243 },
      { id: 4, userId: 1, weighInDate: new Date(2020, 5, 4), currentWeight: 242 },
      { id: 5, userId: 1, weighInDate: new Date(2020, 5, 5), currentWeight: 241 },
      { id: 6, userId: 1, weighInDate: new Date(2020, 5, 6), currentWeight: 240 },
    ];
  }
}
