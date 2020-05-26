import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { WeightService } from '../services/weight.service';
import { WeightRecord } from '../interfaces/weight-record';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
/** user component*/
export class UserComponent  {

    /** user ctor */
  constructor(private userData: UserService, private weightData:WeightService) { }

  user: User;
  currentWeight: number;
  startWeight: number;
  percent: number;
  goalProgress: number;
  weightRecords: WeightRecord[];

  canvas: any;
  ctx: any;

  chart: any;
  month: string[];
  weight: number[];
  weightGoal: number[];




  ngOnInit() {
   

    this.userData.getUserByID(1).subscribe(
      (data: User) => {
        this.user = { ...data };
      },
      error => console.error(error)
    );

    this.weightData.getWeightsOfUserByID(1).subscribe(
      (data: WeightRecord[]) => {
        this.weightRecords = data;

        this.weight = [];
        this.month = [];

        for (let w of this.weightRecords) {
          this.weight.push(w.currentWeight);
        }
        this.weight.reverse();
        for (let w of this.weightRecords) {
          var date = new Date(w.weightInDate);
          var monthAdd = date.getMonth() + 1;
          this.month.push(monthAdd.toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString());
        }
        this.month.reverse();
        this.loadGraph();
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

  loadGraph() {

    this.weightGoal = [this.user.weightLossGoal];

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.month,
        datasets: [
          {
            label: 'Weight',
            data: this.weight,
            borderColor: 'red',
            fill: false
          },
          {
            label: 'Weight Goal',
            data: this.weightGoal,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],

        }
      }
    });
  }


}



