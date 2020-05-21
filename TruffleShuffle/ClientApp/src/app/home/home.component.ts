import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  recipes: Recipe[];
  user: User;
  

  constructor(private recipeData: RecipeService) { }

  ngOnInit() {
    this.getAllRecipes();
  }
    
  getAllRecipes() {
    this.recipeData.getAllRecipes().subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
      },
      error => console.error(error)
    );
  }

  login() {
    userName: this.user.userName;
    userPassword: this.user.userName

  }

}
