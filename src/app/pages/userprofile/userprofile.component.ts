import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@app/models';
import { UserService } from '@app/service';
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
  userSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.route.data.subscribe(data => {
      this.currentUser = data.user;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.userSubscription.unsubscribe();
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
