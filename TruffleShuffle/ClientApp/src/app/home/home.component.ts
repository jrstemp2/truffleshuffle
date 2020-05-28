import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { WeightService } from '../services/weight.service';
import { WeightRecord } from '../interfaces/weight-record';
//import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  recipes: Recipe[];
  user: User;
  users: User[];
  weightRecords: WeightRecord[];

  constructor(private recipeData: RecipeService, private userData: UserService, private weightData: WeightService) { }

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

  displayTitle(title): string {
    if (title.length >= 18) {
      return title.substring(0, 15) + "...";
    } else {
      return title;
    }
  }
  
}
