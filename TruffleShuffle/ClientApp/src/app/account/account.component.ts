import { Component } from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
/** account component*/
export class AccountComponent {
    /** account ctor */
    constructor() { }

  showSignIn: boolean = false;
  showLognIn: boolean = false;

  showLoginForm() {
    if (this.showLognIn === false) {
      this.showLognIn = true;
      this.showSignIn = false;
    }
    else {
      this.showLognIn = false;
    }
  }

  showSignUpForm() {
    if (this.showSignIn === false) {
      this.showSignIn = true;
      this.showLognIn = false;
    }
    else {
      this.showSignIn = false;
    }
  }
}
