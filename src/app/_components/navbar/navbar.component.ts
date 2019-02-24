import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';
import { ShoppingService } from '@app/_services/shopping.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  currentUser: User;
  currentUserSubscription: Subscription;

  currentShoppingSubscription: Subscription;
  cartCount: number;

  constructor(private router: Router, private authenticationService: AuthenticationService, private shoppingData: ShoppingService, public dialog: MatDialog) { }

  ngOnInit() {

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    this.currentShoppingSubscription = this.shoppingData.cartCount.subscribe(count => {
      this.cartCount = count;
    })

  }

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
