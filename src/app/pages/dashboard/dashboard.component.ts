import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;


  images;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  }

}