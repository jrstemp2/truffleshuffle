import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JoinedRF } from '../interfaces/joinedRF';

@Injectable()
export class RecipeFavoriteService {


  constructor(private http: HttpClient) {}

  getFavoritesByUserID(id:number) {
    return this.http.get<JoinedRF[]>(`/api/favorites/${id}`);
  }
}
