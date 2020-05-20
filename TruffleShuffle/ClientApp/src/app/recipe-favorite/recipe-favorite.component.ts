import { Component } from '@angular/core';
import { RecipeFavoriteService } from '../services/recipe-favorite.service';
import { Recipe } from '../interfaces/recipe';
import { RecipeFavorite } from '../interfaces/recipefavorite';
import { JoinedRF } from '../interfaces/joinedRF'
//joined import needed here

@Component({
    selector: 'app-recipe-favorite',
    templateUrl: './recipe-favorite.component.html',
    styleUrls: ['./recipe-favorite.component.scss']
})
/** recipeFavorite component*/
export class RecipeFavoriteComponent {
    /** recipeFavorite ctor */
  constructor(private recipeFavoriteData: RecipeFavoriteService) { }

  favRecipes: JoinedRF[];
  newuserID: number = 1;

  loadPage() {
    this.recipeFavoriteData.getFavoritesByUserID(this.newuserID).subscribe(
      (data: JoinedRF[]) => {
        this.favRecipes = data;
      },
      error => console.error(error)
    );
  }
}
