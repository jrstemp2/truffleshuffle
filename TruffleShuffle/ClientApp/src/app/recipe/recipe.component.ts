import { Component } from '@angular/core';

import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';

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


  //------------------------------Add New Recipe---------------------------------
  
  newRecipe: Recipe;
  
  newTitle: string = "";
  newIngredients: string = "";
  newCookingInstructions: string = "";
  newTotalCalories: number = 0;
  newCategory: string = "";
  newFoodImage: string = "";
  showFoodIMage: string = "";


  addNewRecipe() {
    this.recipeData.addRecipe({ id: 0, title: this.newTitle, ingredients: this.newIngredients, cookingInstructions: this.newCookingInstructions, totalCalories: this.newTotalCalories, category: this.newCategory, foodImage: this.newFoodImage} as Recipe)
      .subscribe(
        data => this.loadPage(),
        error => console.error(error)
      );
    this.clearForm();
    this.showAddRecipeButton = false;

  }


   //FORM
  showAddRecipeButton: boolean = false;
  showURLBox: boolean = false;
  showAddRecipeForm() {
    if (this.showAddRecipeButton === false) {
      this.showAddRecipeButton = true;
    }
    else {
      this.showAddRecipeButton = false;
    }
  }

  clearForm() {
    this.newTitle = "";
    this.newIngredients = "";
    this.newCookingInstructions = "";
    this.newTotalCalories = 0;
    this.newCategory = "";
    this.newFoodImage = "";
  }


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
