import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { ShoppingService } from '@app/_services/shopping.service'
import { RewardItem } from '@app/_models';
import { tap, first, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MEMORY } from '@app/constants';

@Component({
  selector: 'app-reward-info',
  templateUrl: './reward-info.component.html',
  styleUrls: ['./reward-info.component.scss']
})
export class RewardInfoComponent implements OnDestroy {

  dollars: boolean = false;
  currentItem: RewardItem;
  routerSubscription: Subscription;
  shoppingSubscription: Subscription;

  pointRatio = MEMORY.pointRatio;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private router: Router, public dialogRef: MatDialogRef<RewardInfoComponent>, private shoppingData: ShoppingService) {

    this.shoppingSubscription = this.shoppingData.itemsList.subscribe(item => {
      item.forEach(item => { if (item.id == data) { this.currentItem = item } })
    });

  }

  ngOnDestroy() {
    this.shoppingSubscription.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  routeTo(route) {
    this.router.navigate([route]);
  }

  removeFromCart() {
    this.shoppingData.removeFromCart(this.currentItem.id);
  }

  addToCart() {
    this.shoppingData.addToCart(this.currentItem.id);
  }

}