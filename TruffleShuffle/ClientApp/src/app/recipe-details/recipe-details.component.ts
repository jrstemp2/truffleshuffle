import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

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
  constructor(private recipeData: RecipeService, private route: ActivatedRoute) { }
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

  


}
