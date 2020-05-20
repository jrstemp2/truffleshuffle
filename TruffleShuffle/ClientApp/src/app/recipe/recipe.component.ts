import { Component } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
/** recipe component*/
export class RecipeComponent {
    /** recipe ctor */
  constructor(private recipeData: RecipeService) { }

  recipes: Recipe[];


  //For Making a new Recipe Object to Add.
  //newRecipe: Recipe;


  loadPage() {
    this.recipeData.getAllRecipes().subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
      },
      error => console.error(error)
    );
  }

  ngOnInit() {
    this.loadPage();
  }
}
