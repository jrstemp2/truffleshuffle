import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/** login component*/
export class LoginComponent {

  user: User;

  login() {
    userName: this.user.userName;
    userPassword: this.user.userName
  }
  constructor() {

  }


}
