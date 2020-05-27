import { Component, Input, OnInit } from '@angular/core';
import { RecipeFavoriteService } from '../services/recipe-favorite.service';
import { Recipe } from '../interfaces/recipe';
import { RecipeFavorite } from '../interfaces/recipefavorite';
import { JoinedRF } from '../interfaces/joinedRF'
import { ActivatedRoute } from '@angular/router';

import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
//joined import needed here

@Component({
    selector: 'app-recipe-favorite',
    templateUrl: './recipe-favorite.component.html',
    styleUrls: ['./recipe-favorite.component.scss']
})
/** recipeFavorite component*/
export class RecipeFavoriteComponent {
    /** recipeFavorite ctor */
  constructor(private recipeFavoriteData: RecipeFavoriteService, private userData: UserService, private route: ActivatedRoute) { }

  favRecipes: JoinedRF[];
  @Input() ref: string;
  id: number;
  userID: number;
  recipeID: number;
  user: User;


  loadPage() {

    //this.route.params.subscribe(params => {
    //  this.id = + params['id'];

    //  console.log("Attempting to retrieve data")
    //  this.recipeFavoriteData.getFavoritesByUserID(this.id).subscribe(
    //    (data: JoinedRF[]) => this.favRecipes = data,
    //    error => console.error(error)
    //  );
    //})

    this.user = this.userData.getUser();

    this.recipeFavoriteData.getFavoritesByUserID(this.user.id).subscribe(
      (data: JoinedRF[]) => this.favRecipes = data,
      error => console.error(error)
    );
  }


  ngOnInit() {
    this.loadPage();
  }

  deleteFavorite(id: number) {
    
    this.recipeFavoriteData.deleteRecipe(id).subscribe(
      (data: any) => {
        console.log(data);
        this.loadPage();
      },
      error => console.error(error)
    );
  }

  
}
