import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { AuthenticationService, UserService } from '@app/_services';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit, OnDestroy {

  private pts = 0;
  private user;

  options;

  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(private router: Router, private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.options = optionsList;

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => { this.currentUser = user; });

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  routeTo(destination) {
    this.router.navigate([`userprofile/${destination}`]);
  }

}

const optionsList = [
  {
    id: 'orders',
    name: "Your Orders",
    icon: "shopping_basket"
  },
  {
    id: 'profile',
    name: "Profile",
    icon: "account_box"
  },
  // {
  //   id: 'communication',
  //   name: "Communication",
  //   icon: "email"
  // },
  {
    id: 'redeem',
    name: "Redeem",
    icon: "star"
  },
  {
    id: 'payment',
    name: "Payment",
    icon: "account_balance"
  },
  {
    id: 'security',
    name: "Security",
    icon: "vpn_key"
  }

]
