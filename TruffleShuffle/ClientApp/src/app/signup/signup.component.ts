import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
/** signup component*/
export class SignupComponent {
  user: User;

  userName: string;
  displayName: string;
  userPassword: string;
  weightLossGoal: number;
  errorMessage: string = '';


  constructor(private userData: UserService) { }



  signUp() {
    if (this.validUser()) {
      this.userData.signupUser({
        id: 0,
        userName: this.userName,
        displayName: this.displayName,
        userPassword: this.userPassword,
        weightLossGoal: this.weightLossGoal
      }).subscribe(
        (data: object) => console.log(data),
        error => console.error(error));
    }
  }

  validUser(): boolean {

    if (this.userName.length < 2) {
      console.log('user.userName: ' + this.user.userName)
      this.errorMessage = 'Name must be more than 2 characters';
      return false;
    }

    if (this.userPassword.length < 8) {
      this.errorMessage = 'Password must be more than 8 characters';
      return false;
    }

    if (this.displayName.length < 2) {
      this.errorMessage = 'Display name must be at least 2 characters long';
      return false;
    }

    return true;
  }



}
