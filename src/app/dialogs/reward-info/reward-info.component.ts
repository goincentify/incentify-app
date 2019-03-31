import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { MEMORY } from '@app/constants';
import { RewardItem } from '@app/models/reward-item';
import { ShoppingService } from '@app/service/shopping.service';
import { Subscription } from 'rxjs';

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
    this.currentItem = this.data;
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