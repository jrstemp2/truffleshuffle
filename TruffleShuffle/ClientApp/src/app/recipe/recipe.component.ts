import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  errorMessage: string = "";


  addNewRecipe() {

    if (this.isValid()) {
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
          data => {
            this.loadPage();
            this.clearForm();
            this.showAddRecipeButton = false;
          },
          error => console.error(error)
        );
    }
  }


  isValid():boolean {
    this.errorMessage = "";
    if (this.newTitle.length >= 45 || this.newTitle.length <= 2) {
      this.errorMessage = "Invalid Title Length";
      return false;
    }
    if (this.newIngredients.length >= 300 || this.newIngredients.length <= 5) {
      this.errorMessage = "Invalid Ingredients Length";
      return false;
    }
    if (this.newCookingInstructions.length >= 350 || this.newCookingInstructions.length <= 5) {
      this.errorMessage = "Invalid Cooking Instructions Length";
      return false;
    }
    if (this.newTotalCalories <= 0) {
      this.errorMessage = "Invalid Amount of Calories";
      return false;
    }
    if (this.newCategory.length >= 45 || this.newCategory.length <= 5) {
      this.errorMessage = "Invalid Category Length";
      return false;
    }
      
    return true;
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
