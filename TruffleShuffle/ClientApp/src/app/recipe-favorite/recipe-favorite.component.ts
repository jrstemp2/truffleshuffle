import { Component, Input, OnInit } from '@angular/core';
import { RecipeFavoriteService } from '../services/recipe-favorite.service';
import { Recipe } from '../interfaces/recipe';
import { RecipeFavorite } from '../interfaces/recipefavorite';
import { JoinedRF } from '../interfaces/joinedRF'
import { ActivatedRoute } from '@angular/router';
//joined import needed here

@Component({
    selector: 'app-recipe-favorite',
    templateUrl: './recipe-favorite.component.html',
    styleUrls: ['./recipe-favorite.component.scss']
})
/** recipeFavorite component*/
export class RecipeFavoriteComponent {
    /** recipeFavorite ctor */
  constructor(private recipeFavoriteData: RecipeFavoriteService, private route: ActivatedRoute) { }

  favRecipes: JoinedRF[];
  @Input() ref: string;
  id: number;


  loadPage() {

    this.route.params.subscribe(params => {
      this.id = + params['id'];

      console.log("Attempting to retrieve data")
      this.recipeFavoriteData.getFavoritesByUserID(this.id).subscribe(
        (data: JoinedRF[]) => this.favRecipes = data,
        error => console.error(error)
      );
    })
  }


  ngOnInit() {
    this.loadPage();
  }


  
}
