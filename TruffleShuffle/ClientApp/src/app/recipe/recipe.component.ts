import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() updateEmitter = new EventEmitter<Recipe>();

  constructor(private recipeData: RecipeService) { }

  recipes: Recipe[];

  updateRecipe: Recipe;


  //------------------------------CREATE---------------------------------
  
  newRecipe: Recipe;
  updateID: number = 0;
  newTitle: string = "";
  newIngredients: string = "";
  newCookingInstructions: string = "";
  newTotalCalories: number;
  newCategory: string = "";
  newFoodImage: string = "";
  showFoodImage: string = "";


  addNewRecipe() {
    this.recipeData.addRecipe({
      id: 0,
      title: this.newTitle,
      ingredients: this.newIngredients,
      cookingInstructions: this.newCookingInstructions,
      totalCalories: this.newTotalCalories,
      category: this.newCategory,
      foodImage: this.newFoodImage
    } as Recipe)
      .subscribe(
        data => this.loadPage(),
        error => console.error(error)
      );
    this.clearForm();
    this.showAddRecipeButton = false;

  }

            // ADD RECIPE FORM 
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
  //---------------------------------------------------------
  //------------------------READ-----------------------------
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
  //---------------------------------------------------------



  //---------------------------------------------------------
  //--------------------DELETE RECIPE------------------------
  //deleteRecipeByID(id: number) {
  //  this.recipeData.deleteRecipeByID(id).subscribe(
  //    (data: any) => {
  //      console.log(data);
  //      this.loadPage();
  //    },
  //    error => console.error(error)
  //  );
  //}


  
}
