import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { User } from "@app/models";
import { UserService } from "./user.service";
import { EMPTY, Observable, of } from "rxjs";
import { mergeMap, take, switchMap } from 'rxjs/operators';
import { AuthService } from "@app/core";

@Injectable({
    providedIn: 'root',
})
export class UserResolve implements Resolve<User[]> {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Observable<never> {
        return this.userService.getUsers().pipe(
            take(1),
            switchMap(users => {
                if (users) {
                    return of(users);
                } else {
                    // this.router.navigate(['/crisis-center']);
                    console.log("Error getting Users");
                    return EMPTY;
                }
            })
        );
    }
}

@Injectable({
    providedIn: 'root',
})
export class CurrentUserResolve implements Resolve<User> {
    constructor(private userService: UserService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Observable<never> {
        const username: String = this.authService.getUsername();
        return this.userService.getUser(username).pipe(
            take(1),
            switchMap(user => {
                if (user) {
                    return of(user);
                } else {
                    // this.router.navigate(['/crisis-center']);
                    console.log("Error getting user");
                    return EMPTY;
                }
            })
        );        
    }
}