import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(private router: Router) { }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  isLoggedIn() {
    if (localStorage['user']) {
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  

}
