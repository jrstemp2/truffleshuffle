import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

import { JoinedRF } from '../interfaces/joinedRF';
import { RecipeFavorite } from '../interfaces/recipefavorite';

@Injectable()
export class RecipeFavoriteService {


  constructor(private http: HttpClient, private userService:UserService) {}

  getFavoritesByUserID(id:number) {
    return this.http.get<JoinedRF[]>(`/api/favorites/${id}`);
  }

  addToFavorite(recipeID: number) {

    let favRecipe: RecipeFavorite = {
      id: 0,
      userID: this.userService.getCurrentUserID(),
      recipeID: recipeID
    };
    return this.http.post<RecipeFavorite>('/api/favorites', favRecipe);
  }

  deleteRecipe(id: number) {
    return this.http.delete(`/api/favorites/${id}`);
  }
}
