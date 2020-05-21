import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JoinedRF } from '../interfaces/joinedRF';
import { RecipeFavorite } from '../interfaces/recipefavorite';

@Injectable()
export class RecipeFavoriteService {


  constructor(private http: HttpClient) {}

  getFavoritesByUserID(id:number) {
    return this.http.get<JoinedRF[]>(`/api/favorites/${id}`);
  }

  addToFavorite(recipeID: number) {

    let favRecipe: RecipeFavorite = {
      id: 0,
      userID: 1,
      recipeID: recipeID
    };
    return this.http.post<RecipeFavorite>('/api/favorites', favRecipe);
  }

  deleteRecipe(id: number) {
    return this.http.delete(`/api/favorites/${id}`);
  }
}
