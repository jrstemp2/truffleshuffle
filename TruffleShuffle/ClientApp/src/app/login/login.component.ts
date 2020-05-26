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
  constructor(private userService: UserService) { }

  user: User = {
    id: 0,
    userName: '',
    userPassword: '',
    displayName: '',
    weightLossGoal: 0,
  };

  errorMessage: string = '';


  login() {
    this.errorMessage = '';
    if (this.validUser()) {
      this.userService.loginUser(this.user).subscribe(
        data => {
          if (data.success) {
            this.user = data.user;
            localStorage.user = JSON.stringify(this.user);
          } else {
            this.errorMessage = data.errorMessage;
          }
        }, error => console.error(error)
      );
    }
  }
  validUser(): boolean {
    if (this.user.userName.length < 2) {
      console.log('user.userName: ' + this.user.userName)
        this.errorMessage = 'Name must be more than 2 characters';
        return false;
      }

    if (this.user.userPassword.length < 8) {
        this.errorMessage = 'Password must be more than 8 characters';
        return false;
      }

      return true;
    }
    
  

}
