import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingService } from '@app/_services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnDestroy {

  shoppingSubscription: Subscription;
  orders;
  ordersExist: boolean = false;
  orderColumns = ["id", "name", "price", "date"];

  constructor(private shoppingcartData: ShoppingService) {
    this.shoppingSubscription = this.shoppingcartData.ordersList.subscribe(orders => {
      this.orders = orders;
      if (this.orders.length > 0) { this.ordersExist = true; }
    });
  }

  ngOnDestroy() {
    this.shoppingSubscription.unsubscribe();
  }

}
