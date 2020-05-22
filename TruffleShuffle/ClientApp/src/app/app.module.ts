import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { WeightRecordComponent } from './weight-record/weight-record.component';
import { NewWeightComponent } from './new-weight/new-weight.component';
import { WeightRecordsListComponent } from './weight-records-list/weight-records-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFavoriteComponent } from './recipe-favorite/recipe-favorite.component';


import { UserService } from './services/user.service';
import { WeightService } from './services/weight.service';
import { RecipeService } from './services/recipe.service';
import { RecipeFavoriteService } from './services/recipe-favorite.service';
import { UserFavoriteComponent } from './user-favorite/user-favorite.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UserComponent,
    WeightRecordComponent,
    NewWeightComponent,
    WeightRecordsListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeFavoriteComponent,
    UserFavoriteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UserComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'recipe', component: RecipeComponent },
      { path: 'recipe/:id', component: RecipeDetailsComponent },
      { path: 'recipefavorite/:id', component: RecipeFavoriteComponent },
      
    ])
  ],
  providers: [UserService, WeightService, RecipeService, RecipeFavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
