import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../interfaces/user';

import { JoinedRF } from '../interfaces/joinedRF';
import { RecipeFavorite } from '../interfaces/recipefavorite';

@Injectable()
export class RecipeFavoriteService {


  constructor(private http: HttpClient, private userService:UserService) {}

  getFavoritesByUserID(id:number) {
    return this.http.get<JoinedRF[]>(`/api/favorites/${id}`);
  }

  getFavByUserID(id: number) {
    return this.http.get<RecipeFavorite[]>(`/api/favorites/${id}`);
  }

  addToFavorite(recipeID: number, userID:number) {

    let favRecipe: RecipeFavorite = {
      id: 0,
      //userID: this.userService.getCurrentUserID(),
      userID: userID,
      recipeID: recipeID
    };
    return this.http.post<RecipeFavorite>('/api/favorites', favRecipe);
  }

  deleteRecipe(id: number) {
    return this.http.delete(`/api/favorites/${id}`);
  }
}
