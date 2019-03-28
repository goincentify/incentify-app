import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '@app/models/user.model';
// import { UserService } from '@app/service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core';
import { UserService } from '@app/service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource<User>();
  currentUser: User;

  navOptions = navOptions;
  resources = resources;
  items;

  name;
  image;
  userTier: string;
  userPoints: number;
  userOnTimePercent: number;
  userTardyPercent: number;
  userOnTimePercentile: number;
  userTotalDays: number;
  userDayStreakPercentile: number;
  userDaysWorkedPercentile: number;
  userDayStreak: number;

  progress;
  userOnTimeGoal;
  userTotalDaysGoal;
  tierIcon: string;

  userSubscription: Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.route.data.subscribe(data => {

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

      this.tierIcon = this.getIconImg(this.userTier);
      this.progress = this.defineProgress(this.userTier.toLowerCase());
      this.userOnTimeGoal = ((this.userOnTimePercent / this.progress.onTimeGoal) * 100);
      this.userTotalDaysGoal = ((this.userTotalDays / this.progress.totalDaysGoal) * 100);
    });

    this.items = [
      {
        name: "Your Dashboard",
        items: [
          {
            title: "Points",
            subtitle: "Current Total Points",
            icon: "local_atm",
            description: "You currently have this amount of points. Head over to the marketplace to redeem.",
            value: this.userPoints,
            nextLevelValue: 95,
            button:
            {
              text: "Shop!",
              info: "This will provide employees with the opportunity to redeem rewards via a marketplace/shopping cart function. \n\n" +
                "A simple 3 click process! \n\n" +
                "Click 1: View reward details \n" +
                "Click 2: Add item to cart \n" +
                "Click 3: Redeem rewards."
            }
          },
          {
            title: "Tier Level",
            chartid: "tier",
            subtitle: "Current Rewards Levels",
            icon: "stars",
            description: "Employees will be categorized into tiers. These tiers motivate employees by providing tangible measures of progress. \n\n" +
              "A) Silver: After 2 weeks of employment, employees reach Silver status. \n\n" +
              "B) Gold: After 5 weeks of employment and an 75% on time rate, employees reach Gold status. \n\n" +
              "C) Platinum: After 9 weeks of employment and an 85% on time rate, employees reach Platinum status. \n",
            value: this.userTier,
            nextLevelValue: 33,
            button:
            {
              text: "Details",
              info: "Employees will be categorized into tiers. These tiers motivate employees by providing tangible measures of progress. \n\n" +
                "A) Silver: After 2 weeks of employment, employees reach Silver status. \n\n" +
                "B) Gold: After 5 weeks of employment and an 75% on time rate, employees reach Gold status. \n\n" +
                "C) Platinum: After 9 weeks of employment and an 85% on time rate, employees reach Platinum status. \n"
            }
          },
          {
            title: "Days On-Time Streak",
            subtitle: "Consecutive Days with on-time clock in.",
            icon: "outlined_flag",
            description: "Number of days you have clocked in at or before your set arrival time.",
            value: this.userDayStreak,
            nextLevelValue: 56,
            button:
            {
              text: "Details",
              info: "On-time percentage goes into calculating tiers. \n\n" +
                "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
                "85% combined with 9 weeks worked will elevate an employee to Platinum."
            }
          },
          {
            title: "% On-Time",
            subtitle: "Percentage of on-time clock-ins.",
            icon: "alarm",
            description: "This will be calculated through the expected clock in time vs. the time card. With custom leway given.",
            value: Math.round(this.userOnTimePercent),
            nextLevelValue: 89,
            button:
            {
              text: "Details",
              info: "On-time percentage goes into calculating tiers. \n\n" +
                "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
                "85% combined with 9 weeks worked will elevate an employee to Platinum."
            }
          },
          {
            title: "Referrals Processed",
            subtitle: "Number of referrals that have been processed successfully.",
            icon: "assignment_ind",
            description: "A referral will be awarded when an employee has sent an email and referred employee has sent in an application.",
            value: 5,
            button:
            {
              text: "Details",
              info: "A referral will be awarded when an employee has sent an email and referred employee has sent in an application."
            }
          }
        ]
      },  // END USER
      {
        name: "Team Dashboard",
        items: [
          {
            title: "Team Points Earned",
            subtitle: "Current Total Points",
            icon: "local_atm",
            description: "Your team currently has this amount of points. Head over to the marketplace to redeem.",
            value: "873",
            nextLevelValue: 65,
            button:
            {
              text: "Shop!",
              info: "This will provide teams with the opportunity to redeem rewards via a marketplace/shopping cart function. \n\n" +
                "A simple 3 click process! \n\n" +
                "Click 1: View reward details \n" +
                "Click 2: Add item to cart \n" +
                "Click 3: Redeem rewards."
            }
          },
          {
            title: "Team Status",
            chartid: "tier",
            subtitle: "Current Rewards Levels",
            icon: "stars",
            description: "Teams will be categorized into tiers. These tiers motivate the team by providing tangible measures of progress. \n\n" +
              "A) Silver \n\n" +
              "B) Gold \n\n" +
              "C) Platinum \n",
            value: 2,
            nextLevelValue: 60,
            button:
            {
              text: "Details",
              info: "Teams will be categorized into tiers. These tiers motivate the team by providing tangible measures of progress. \n\n" +
                "A) Silver \n\n" +
                "B) Gold \n\n" +
                "C) Platinum \n",
            }
          },
          {
            title: "Team Days Last Week",
            subtitle: "Total Team Days Worked Last Week.",
            icon: "outlined_flag",
            description: "Number of days your team have clocked in at or before your set arrival time.",
            value: 43,
            nextLevelValue: 43,
            button:
            {
              text: "Details",
              info: "On-time percentage goes into calculating tiers. \n\n" +
                "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
                "85% combined with 9 weeks worked will elevate an employee to Platinum."
            }
          },
          {
            title: "Team % On-Time",
            subtitle: "Percentage of on-time clock-ins.",
            icon: "alarm",
            description: "This will be calculated through the expected clock in time vs. the time card. With custom leway given.",
            value: 76,
            nextLevelValue: 76,
            button:
            {
              text: "Details",
              info: "On-time percentage goes into calculating tiers. \n\n" +
                "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
                "85% combined with 9 weeks worked will elevate an employee to Platinum."
            }
          }
        ]
      }  // END TEAM
    ]
  } 

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.userSubscription.unsubscribe();
  }


  defineProgress(tier) {
    var progress;

    switch (tier.toLowerCase()) {
      case "silver":
        progress = tierLevels.tier_one
        break;
      case "gold":
        progress = tierLevels.tier_two
        break;
      default:
        progress = tierLevels.default
    }
    return progress;
  }

  getIconImg(tier: string) {
    return `assets/img/icon/tier-${tier.toLowerCase()}.png`;
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

let resources = [
  {
    display: "Affordable Housing Partners",
    url: "https://www.toronto.ca/community-people/community-partners/affordable-housing-partners/",
    description: "Toronto affordable housing partners, locate homes and new developments in the area."
  },
  {
    display: "Child Care & Before-After School Program Locator",
    url: "https://www.toronto.ca/community-people/children-parenting/children-programs-activities/licensed-child-care/child-care-locator/",
    description: "Search for a licensed child care or a before-after school program in Toronto."
  }
]

//THIS OBJECT DEFINES tier LEVELS
const tierLevels = {
  tier_one: {
    onTimeGoal: 70,
    totalDaysGoal: 90
  },
  tier_two: {
    onTimeGoal: 85,
    totalDaysGoal: 180
  },
  default: {
    onTimeGoal: 100,
    totalDaysGoal: 270
  }

}
