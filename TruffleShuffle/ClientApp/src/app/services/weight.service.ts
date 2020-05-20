import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeightRecord } from '../interfaces/weight-record';

@Injectable()
export class WeightService {
  constructor(private http: HttpClient) { }

  addWeightToDB(weightData: WeightRecord) {
    return this.http.post<WeightRecord>('/api/weightrecord', weightData);
  }

  getWeightsOfUserByID(id: number) {
    return this.http.get<WeightRecord[]>(`/api/weightrecord/${id}`);
  }

  getNewestWeightOfUserByID(id: number) {
    return this.http.get<WeightRecord>(`api/weightrecord/newest/${id}`);
  }
  GetOldestWeightRecord(id: number) {
    return this.http.get<WeightRecord>(`api/weightrecord/oldest/${id}`);
  }
}
