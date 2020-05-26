import { Component, OnInit, Output, Input } from '@angular/core';
import { WeightRecord } from '../interfaces/weight-record';
import { WeightService } from '../services/weight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  constructor(private weightData: WeightService, private route: ActivatedRoute, private router: Router) {}
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

    }).subscribe(
      (data: object) => console.log(data), error => console.error(error));
    //this.router.navigate(['/user/']);
  }
}
