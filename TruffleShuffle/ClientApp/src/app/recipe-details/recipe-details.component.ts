import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeFavorite } from '../interfaces/recipefavorite';
import { RecipeFavoriteService } from '../services/recipe-favorite.service';
import { JoinedRF } from '../interfaces/joinedRF';
const MarkdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');

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
/** recipeDetails component*/
export class RecipeDetailsComponent {
  /** recipeDetails ctor */
  constructor(private recipeData: RecipeService, private recipeFavoriteData: RecipeFavoriteService, private userData: UserService, private route: ActivatedRoute) { }
  @Input() ref: string;
  recipe: Recipe = {
    id: 0,
    title: '',
    ingredients: '',
    cookingInstructions: '',
    totalCalories: 0,
    category: '',
    foodImage: '',
  };
  recipeID: number;
  addFav: boolean = false;
  includes: boolean = false;
  addtoFav: boolean = true;
  errorMessage: string = "";
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
    this.recipeFavoriteData.getFavoritesByUserID(this.user.id).subscribe(
      (data: JoinedRF[]) => this.favRecipes = data,
      error => console.error(error)
    );
  }

  ngOnInit() {
    this.md.use(emoji);
    this.loadPage();
  }

  //Add Fav

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
    this.showUpdateForm = !this.showUpdateForm;
  }


  updateRecipeByID() {
    if (this.isValid()) {
      this.recipeData.editRecipe(this.recipe).subscribe(
        data => { this.loadPage(); console.log(data) },
        error => console.error(error)
      );
      this.showUpdateForm = false;
    }


  }

  isValid(): boolean {
    this.errorMessage = "";
    if (this.recipe.title.length >= 45 || this.recipe.title.length <= 2) {
      this.errorMessage = "Invalid Title Length";
      return false;
    }
    if (this.recipe.ingredients.length >= 1000 || this.recipe.ingredients.length <= 5) {
      this.errorMessage = "Invalid Ingredients Length";
      return false;
    }
    if (this.recipe.cookingInstructions.length >= 1000 || this.recipe.cookingInstructions.length <= 5) {
      this.errorMessage = "Invalid Cooking Instructions Length";
      return false;
    }
    if (this.recipe.totalCalories <= 0) {
      this.errorMessage = "Invalid Amount of Calories";
      return false;
    }
    if (this.recipe.category.length >= 45 || this.recipe.category.length <= 2) {
      this.errorMessage = "Invalid Category Length";
      return false;
    }

    return true;
  }

  md = new MarkdownIt();

  renderAsMarkdown(text: string): string {
    const regex = /([^>])\n/gi;
    return this.md.render(text).replace(regex, '$1<br />');
  }


}
