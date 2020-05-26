import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


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
    SignupComponent,
    UserFavoriteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'user', component: UserComponent },
      { path: 'recipe', component: RecipeComponent },
      { path: 'favorite', component: RecipeFavoriteComponent },
      { path: 'recipe/:id', component: RecipeDetailsComponent },
      { path: 'favorites/:id', component: RecipeFavoriteComponent },
      
    ])
  ],
  providers: [UserService, WeightService, RecipeService, RecipeFavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
