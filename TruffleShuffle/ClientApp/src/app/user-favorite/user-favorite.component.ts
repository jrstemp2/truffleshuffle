import { Component, Input, OnInit } from '@angular/core';
import { RecipeFavoriteService } from '../services/recipe-favorite.service';
import { Recipe } from '../interfaces/recipe';
import { RecipeFavorite } from '../interfaces/recipefavorite';
import { JoinedRF } from '../interfaces/joinedRF'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-favorite',
    templateUrl: './user-favorite.component.html',
    styleUrls: ['./user-favorite.component.scss']
})
/** user-favorite component*/
export class UserFavoriteComponent {
    /** user-favorite ctor */
  constructor(private recipeFavoriteData: RecipeFavoriteService, private route: ActivatedRoute) { }


  favRecipes: JoinedRF[];
  @Input() ref: string;
  id: number;


  loadPage() {

    this.route.params.subscribe(params => {
      this.id = + params['id'];

      console.log("Attempting to retrieve data")
      this.recipeFavoriteData.getFavoritesByUserID(1).subscribe(
        (data: JoinedRF[]) => this.favRecipes = data,
        error => console.error(error)
      );
    })
  }


  ngOnInit() {
    this.loadPage();
  }


}

