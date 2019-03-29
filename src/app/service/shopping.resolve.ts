import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RewardItem } from "@app/models/reward-item";
import { EMPTY, Observable, of } from "rxjs";
import { switchMap, take } from 'rxjs/operators';
import { ShoppingService } from "./shopping.service";

@Injectable({
    providedIn: 'root',
})
export class RewardItemsResolve implements Resolve<RewardItem[]> {
    constructor(private shoppingService: ShoppingService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RewardItem[]> | Observable<never> {
        return this.shoppingService.getRewards().pipe(
            take(1),
            switchMap(items => {
                if (items) {
                    return of(items);
                } else {
                    // this.router.navigate(['/crisis-center']);
                    console.log("Error getting Users");
                    return EMPTY;
                }
            })
        );
    }
}