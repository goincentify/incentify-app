import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from './_models';
import { AuthenticationService } from './_services';


@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit, OnDestroy {
    currentUser: User;

    routeSubscription: Subscription;

    constructor(private router: Router, private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.routeSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => window.scrollTo(0, 0));
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}