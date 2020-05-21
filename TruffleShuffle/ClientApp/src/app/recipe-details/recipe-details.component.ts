import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeFavorite } from '../interfaces/recipefavorite';
import { RecipeFavoriteService } from '../services/recipe-favorite.service';

import { Recipe } from '../interfaces/recipe';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.scss']
})
/** recipeDetails component*/
export class RecipeDetailsComponent {
    /** recipeDetails ctor */
  constructor(private recipeData: RecipeService, private recipeFavoriteData: RecipeFavoriteService, private route: ActivatedRoute) { }
  @Input() ref: string;
  recipe: Recipe;
  id: number;


  loadPage() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];


      this.recipeData.getRecipeByID(this.id).subscribe(
        (data: Recipe) => this.recipe = { ...data },
        error => console.error(error)
      );
    })
  }

  ngOnInit() {
    this.loadPage();
  }

  addToFavorite(id:number) {
    this.recipeFavoriteData.addToFavorite(id).subscribe(
      (data: any) => console.log('success! ' + id), //TODO: change the button
      error => console.error(error)
    )
  }

  //----------------------EDIT-------------------------------------
  //newRecipe: Recipe;
  //newTitle: string = "";
  //newIngredients: string = "";
  //newCookingInstructions: string = "";
  //newTotalCalories: number = 0;
  //newCategory: string = "";
  //newFoodImage: string = "";
  showFoodImage: string = "";

  showUpdateForm: boolean = false;

  updateForm() {
    if (this.showUpdateForm === false) {
      this.showUpdateForm = true;
      
    }
    else {
      this.showUpdateForm = false;
    }
    
  }

  updateRecipeByID() {
    this.recipeData.editRecipe(this.recipe).subscribe(
      data => { this.loadPage(); console.log(data)},
      error => console.error(error)
    );
    this.showUpdateForm = false;

  }


 
    



}
