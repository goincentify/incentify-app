import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '@app/service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { User } from '@app/models';
import { Subscription } from 'rxjs';
import { AuthService } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redeempoints',
  templateUrl: './redeempoints.component.html',
  styleUrls: ['./redeempoints.component.scss']
})
export class RedeempointsComponent implements OnInit, OnDestroy {

  userPointsSubscription: Subscription;
  points: Number;
  
  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private userService: UserService, private authenticationService: AuthService) { }

  ngOnInit() {
    this.userPointsSubscription = this.route.data.subscribe(data => {
      this.points = data.user.points;
    });
  }

  ngOnDestroy() {
    this.userPointsSubscription.unsubscribe();
  }

  code: string = "";

  selectedCard = {
    cost: 500,
    amount: 5
  };

  availableCards = [
    {
      cost: 500,
      amount: 5
    },
    {
      cost: 1000,
      amount: 10
    },
    {
      cost: 2000,
      amount: 20
    },
    {
      cost: 5000,
      amount: 50
    }
  ];

  addPoints(points: number) {
    // this.userService.addPoints(points).pipe(first()).subscribe(
    //   data => {
    //     this.authenticationService.updateUser();
    //   },
    //   error => {
    //     console.log("something");
    //   }
    // );
  }

  redeem(code: string) {
    // this.userService.redeem(code.toUpperCase()).pipe(first()).subscribe(
    //   data => {
    //     if (data.valid) {
    //       this.authenticationService.updateUser();
    //       this.openSnackBar(code.toUpperCase() + " redeemed!", "OK")
    //       this.code = "";
    //     } else {
    //       this.openSnackBar("Unavailable Code", "OK")
    //       this.code = "";
    //     }
    //   },
    //   error => {
    //     console.log("ERROR: " + error);
    //   }
    // );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }
}
