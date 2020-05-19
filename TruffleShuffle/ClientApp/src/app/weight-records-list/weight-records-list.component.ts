import { Component } from '@angular/core';
import { WeightRecord } from '../interfaces/weight-record';
import { WeightService } from '../services/weight.service';

@Component({
    selector: 'app-weight-records-list',
    templateUrl: './weight-records-list.component.html',
    styleUrls: ['./weight-records-list.component.scss']
})
/** weight-records-list component*/
export class WeightRecordsListComponent {

  weightRecords: WeightRecord[];

    /** weight-records-list ctor */
  constructor(private weightData: WeightService) { }

  ngOnInit() {
    this.weightData.getWeightsOfUserByID(1).subscribe(
      (data: WeightRecord[]) => {
        this.weightRecords = data;
      },
      error => console.error(error)
    );

  }

}
