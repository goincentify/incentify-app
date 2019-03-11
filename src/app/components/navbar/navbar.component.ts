import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core';
import { User } from '@app/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  loggedIn = false;

  currentUser: User;
  currentUserSubscription: Subscription;

  currentShoppingSubscription: Subscription;
  cartCount: number;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  routeTo(destination) {
    this.router.navigate([destination]);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentShoppingSubscription.unsubscribe();
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
