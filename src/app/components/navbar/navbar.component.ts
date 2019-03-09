import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '@app/models';
import { AuthService } from '@app/core';
// import { ShoppingService } from '@app/_services/shopping.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


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

  constructor(private router: Router, private authenticationService: AuthService, public dialog: MatDialog) { }

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
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
