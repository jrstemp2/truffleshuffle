import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) { }

  //Create
  addRecipe(newRecipe: Recipe) {
    return this.http.post<Recipe>('api/recipe', newRecipe);
  }

  //Read
  getAllRecipes() {
    return this.http.get<Recipe[]>('/api/recipe');
  }

  getRecipeByID(id: number) {
    return this.http.get<Recipe>(`/api/recipe/${id}`);
  }


  //update
  editRecipe(recipe: Recipe) {
    return this.http.put<Recipe>('/api/recipe', recipe);
  }

  //Delete --to use this we will need an additional query to delete any recipe used in a favorotes list first.
  //deleteRecipeByID(id: number) {
  //  return this.http.delete(`/api/recipe/${id}`);
  //}


  //update Recipe
  deleteRecipe(id: number) {
    return this.http.delete(`/api/recipe/${id}`);
  }

  
}
