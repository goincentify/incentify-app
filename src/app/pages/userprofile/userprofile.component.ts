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
export class UserprofileComponent implements OnInit {

  options;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.options = optionsList;
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
