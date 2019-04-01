import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { StatisticInfoComponent } from '@app/dialogs';
import { UserService } from '@app/service';
import { AuthenticationService } from '@app/service/authentication.service';
import { ShoppingService } from '@app/service/shopping.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ShoppingcartComponent implements OnInit, OnDestroy {

  cart;

  totalCost: Number;

  displayedColumns: string[] = ["Reward", "Price"];

  pointsTotal: number;

  currentUserSubscription: Subscription;
  shoppingSubscriptions: Subscription[] = [];

  constructor(private shoppingData: ShoppingService, private authenticationService: AuthenticationService, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.pointsTotal = user.points;
    });

    this.shoppingSubscriptions.push(this.shoppingData.cartList.subscribe(cart => { this.cart = cart; }));
    this.shoppingSubscriptions.push(this.shoppingData.totalCost.subscribe(cost => this.totalCost = cost));

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
    this.shoppingSubscriptions.forEach(sub => { sub.unsubscribe(); });
  }

  removeFromCart(item) {
    this.shoppingData.removeFromCart(item);
  }

  redeemCart() {
    if (this.pointsTotal < this.totalCost.valueOf()) {
      this.lowFundsWarning()
    } else {
      this.shoppingData.redeemCart();
    }
  }

  lowFundsWarning(): void {
    const dialogRef = this.dialog.open(StatisticInfoComponent, {
      panelClass: 'no_padding-custom-dialog-container',
      width: '275px',
      data: { dialogtitle: "Not enough points :(", dialogsubtitle: "Error", dialoginfo: "You do not have enough points for these rewards. Remove some items, or continue saving and reward yourself later!" }
    });
  }

}
