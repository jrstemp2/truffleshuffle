import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeFavorite } from '../interfaces/recipefavorite';
import { RecipeFavoriteService } from '../services/recipe-favorite.service';
import { JoinedRF } from '../interfaces/joinedRF';

import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

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
  constructor(private recipeData: RecipeService, private recipeFavoriteData: RecipeFavoriteService, private userData: UserService, private route: ActivatedRoute) { }
  @Input() ref: string;
  recipe: Recipe;
  recipeID: number;

  user: User;

  favRecipes: JoinedRF[];

  loadPage() {

    this.user = this.userData.getUser();

    this.addFav = false;
    this.includes = false;

    this.route.params.subscribe(params => {
      this.recipeID = +params['id'];
      this.recipeData.getRecipeByID(this.recipeID).subscribe(
        (data: Recipe) => this.recipe = { ...data },
        error => console.error(error)
      );
    })

    //---------------Favorites-------------------------------

    //this.route.params.subscribe(params => {
    //  this.id = +params['id']       ???this.user.id;

    //  console.log("Attempting to retrieve data")
    //  this.recipeFavoriteData.getFavoritesByUserID(this.user.id).subscribe(
    //    (data: JoinedRF[]) => this.favRecipes = data,
    //    error => console.error(error)
    //  );
    //})

    this.recipeFavoriteData.getFavoritesByUserID(this.user.id).subscribe(
      (data: JoinedRF[]) => this.favRecipes = data,
      error => console.error(error)
    );
   

  }

  ngOnInit() {
    this.loadPage();
  }

  //Add Fav

  addFav: boolean = false;
  includes: boolean = false;
  addtoFav: boolean = true;

  addToFavorite(id: number) {
    this.putFavInArray(id);
    this.addFav = true;
  }

  checkDups(id: number) {

    console.log(this.favRecipes)
    for (let i = 0; i < this.favRecipes.length; i++) {
      console.log('recipeID' + this.favRecipes[i].recipeID);

      if (this.favRecipes[i].recipeID === id) {
          this.includes = true;
          this.addtoFav = false;
          break;
      }
    }
    if (this.addtoFav === true) {
      this.addToFavorite(id);
    }
  }
  

  putFavInArray(id: number) {
    this.recipeFavoriteData.addToFavorite(id, this.user.id).subscribe(
      (data: any) => {
        console.log('success! ' + id)
        this.recipeFavoriteData.getFavoritesByUserID(this.user.id).subscribe(
          (data: JoinedRF[]) => this.favRecipes = data,
          error => console.error(error)
        );
      },
      error => console.error(error)
    );
  }


  //----------------------EDIT-------------------------------------

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
