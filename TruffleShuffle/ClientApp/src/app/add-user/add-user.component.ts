import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
/** addUser component*/
export class AddUserComponent {
  user: User;

  userName: string;
  displayName: string;
  userPassword: string;
  weightLossGoal: number;


  constructor(private userData: UserService) { }



  signUp() {
    this.userData.addNewUser({
      id: 0,
      userName: this.userName,
      displayName: this.displayName,
      userPassword: this.userPassword,
      weightLossGoal: this.weightLossGoal
    }).subscribe(
      (data: User) => console.log(data),
      error => console.error(error));
    
  }
}
