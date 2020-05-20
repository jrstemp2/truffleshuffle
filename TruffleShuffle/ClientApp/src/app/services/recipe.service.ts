import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) { }

  addRecipe(newRecipe: Recipe) {
    return this.http.post<Recipe>('api/recipe', newRecipe);
  }

  getAllRecipes() {
    return this.http.get<Recipe[]>('/api/recipe');
  }

  getRecipeByID(id: number) {
    return this.http.get<Recipe>(`/api/recipe/${id}`);
  }

  //update Recipe

  
}
