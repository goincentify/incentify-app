import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { User } from "@app/models";
import { UserService } from "./user.service";
import { EMPTY, Observable, of } from "rxjs";
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserResolve implements Resolve<User[]> {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Observable<never> {
        console.log("resolving");
        return this.userService.getUsers().pipe(
            take(1),
            mergeMap(users => {
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

// @Injectable()
// export class CurrentUserResolve implements Resolve<User[]> {
//     constructor(private userService: UserService ) { }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Observable<never> {

//         let id = route.paramMap.get('id');

//         return this.userService.getUsers().pipe(
//             take(1),
//             mergeMap(users => {
//                 if (users) {
//                     return of(users);
//                 } else {
//                     // this.router.navigate(['/crisis-center']);
//                     return EMPTY;
//                 }
//             })
//         );
//     }
// }