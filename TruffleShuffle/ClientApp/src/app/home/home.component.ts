import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  recipes: Recipe[];
  user: User;

  constructor(private recipeData: RecipeService,
    private userData: UserService) { }

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

  
}
