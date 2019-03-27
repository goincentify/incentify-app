import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '@app/models/user.model';
// import { UserService } from '@app/service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core';
import { UserService } from '@app/service';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource<User>();
  currentUser: User;
  navOptions = navOptions;

  name;
  image;
  userOnTimeGoal;
  userTotalDaysGoal;
  userTier: string;
  userPoints: number;
  userOnTimePercent: number;
  userTardyPercent: number;
  userOnTimePercentile: number;
  userTotalDays: number;
  userDayStreakPercentile: number;
  userDaysWorkedPercentile: number;
  userDayStreak: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {

      let user = data.user;

      this.name = user.firstName + " " + user.lastName;
      this.userDayStreakPercentile = user.daystreak_percentile;
      this.userDaysWorkedPercentile = user.totaldays_percentile;
      this.userOnTimePercentile = user.ontimepercent_percentile;
      this.userOnTimePercent = user.ontimedays / user.totaldays * 100;
      this.userTardyPercent = 1 - this.userOnTimePercent;
      this.userTotalDays = user.totaldays;
      this.userPoints = user.points;
      this.userTier = user.tier;
      this.userDayStreak = user.daystreak;
    });
  } 

  signout() {
    this.authService.logout();
  }

}

let navOptions = [
  {
    icon: "flight",
    option: "Travel",
    description: "Redeem rewards points towards a vacation",
    url: "marketplace/travel"
  },
  {
    icon: "card_giftcard",
    option: "Gift Cards",
    description: "Turn those rewards points into credit at your favorite store",
    url: "marketplace/gift card"
  },
  {
    icon: "fitness_center",
    option: " Fitness",
    description: "Reward your body with rewards points",
    url: "marketplace/fitness"
  },
  {
    icon: "shopping_basket",
    option: "Electronics",
    description: "Reward yourself with new gadgets",
    url: "marketplace/electronics"
  },
  {
    icon: "directions_car",
    option: "Transportation",
    description: "Give your rewards some miles",
    url: "marketplace/transportation"
  },
  {
    icon: "attach_money",
    option: "Cash Out",
    description: "Redeem your points for a VISA gift card.",
    url: "/userprofile/redeem",
  }
]

