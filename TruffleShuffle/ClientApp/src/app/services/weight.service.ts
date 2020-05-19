import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeightRecord } from '../interfaces/weight-record';

@Injectable()
export class WeightService {
  constructor(private http: HttpClient) { }

  getWeightsOfSingleUserByID(id: number) {
    return this.http.get<WeightRecord[]>(`/api/weightrecord/${id}`);
  }
}
