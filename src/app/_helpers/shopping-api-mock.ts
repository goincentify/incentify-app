import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError, Subscription } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User, RewardItems, CartColumns, RewardItem, OrderItem } from '@app/_models';
import { ShoppingcartComponent } from '@app/pages';
import { MEMORY } from '@app/constants';
import { AuthenticationService } from '@app/_services';

@Injectable()
export class ShoppingAPIInterceptor implements HttpInterceptor {

    users: any[];
    currentUser: User;
    currentUserSubscription: Subscription;

    constructor(authenticationService: AuthenticationService) {
        this.currentUserSubscription = authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        })
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // get reward items
            if (request.url.endsWith('/rewards/all') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    var rewardItems: RewardItem[] = this.getRewardItems();
                    return of(new HttpResponse({ status: 200, body: rewardItems }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get shopping cart
            if (request.url.endsWith('/cart/all') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    var shoppingcart: RewardItem[] = localStorage.getItem(MEMORY.user) ? JSON.parse(localStorage.getItem(MEMORY.user)).cart : [];
                    return of(new HttpResponse({ status: 200, body: shoppingcart }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // add to shopping cart
            if (request.url.endsWith('/cart/add') && request.method === 'POST') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token' && this.currentUser) {
                    var itemId: number = request.body;

                    var rewardItems: RewardItem[] = this.getRewardItems();
                    var shoppingcart: RewardItem[] = this.currentUser.cart;

                    // add to cart and set in cart tag
                    rewardItems.forEach(item => {
                        if (item.id == itemId && !item.incart) { item.incart = true; shoppingcart.push(item); }
                    });

                    //set user's cart
                    this.currentUser.cart = shoppingcart;

                    localStorage.setItem(MEMORY.rewards, JSON.stringify(rewardItems));
                    localStorage.setItem(MEMORY.user, JSON.stringify(this.currentUser));

                    return of(new HttpResponse({ status: 200, body: { cart: shoppingcart, rewards: rewardItems, totalCost: this.getCartCost() } }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // remove from shopping cart
            if (request.url.endsWith('/cart/remove') && request.method === 'POST') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token' && this.currentUser) {
                    var itemId: number = request.body;

                    var rewardItems: RewardItem[] = this.getRewardItems();
                    var shoppingcart: RewardItem[] = this.currentUser.cart;

                    //update item cart tag
                    rewardItems.forEach(item => {
                        if (item.id == itemId && item.incart) { item.incart = false }
                    });

                    //remove from cart list
                    shoppingcart = shoppingcart.filter(item => { if (item.id != itemId) { item.incart = false; return item } });

                    //set user's cart
                    this.currentUser.cart = shoppingcart;

                    localStorage.setItem(MEMORY.rewards, JSON.stringify(rewardItems));
                    localStorage.setItem(MEMORY.user, JSON.stringify(this.currentUser));

                    return of(new HttpResponse({ status: 200, body: { cart: shoppingcart, rewards: rewardItems, totalCost: this.getCartCost() } }));

                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // redeem entire shopping cart
            if (request.url.endsWith('/cart/redeem') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token' && this.currentUser) {

                    var rewardItems: RewardItem[] = this.getRewardItems();
                    var orderItems: OrderItem[] = this.currentUser.orders ? this.currentUser.orders : [];

                    //deduct cart points from user total

                    var userPoints = this.currentUser.points - this.getCartCost();

                    if (userPoints < 0) {
                        return throwError({ status: 422, error: { message: 'Insufficient Funds' } });
                    }

                    this.currentUser.points = userPoints;

                    //empty cart
                    shoppingcart = [];

                    //add cart items to orders, mark cart items incart as false
                    var newID = orderItems.length;
                    rewardItems.forEach(item => {
                        if (item.incart) {
                            newID += 1;
                            orderItems.push(this.createOrderItem(item, newID));
                        }; item.incart = false
                    });

                    //set user's cart
                    this.currentUser.cart = shoppingcart;

                    localStorage.setItem(MEMORY.rewards, JSON.stringify(rewardItems));
                    localStorage.setItem(MEMORY.user, JSON.stringify(this.currentUser));

                    return of(new HttpResponse({
                        status: 200,
                        body: {
                            cost: 0,
                            rewards: rewardItems,
                            userPoints: this.currentUser.points,
                            cart: this.currentUser.cart,
                            orders: this.currentUser.orders
                        }
                    }));

                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // return total cost of cart
            if (request.url.endsWith('/cart/cost') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    return of(new HttpResponse({ status: 200, body: this.getCartCost() }));

                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get columns for cart display
            if (request.url.endsWith('/cartcolumns') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: CartColumns.columns }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // pass through any requests not handled above
            return next.handle(request);

        }))

            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }


    // SHOPPING FUNCTIONS

    getItemById(itemId: number, itemList: RewardItem[]) {
        return null;
    }

    getRewardItems(): RewardItem[] {
        return localStorage.getItem(MEMORY.rewards) ? JSON.parse(localStorage.getItem(MEMORY.rewards)) : RewardItems;
    }

    getCartCost(): number {
        var totalCost: number = 0;

        if (this.currentUser.cart.length > 0) {

            this.currentUser.cart.forEach(item => {
                totalCost += item.price;
            });
        }
        return totalCost;
    }

    createOrderItem(item, newID) {
        var now = new Date();

        var orderItem: OrderItem = {
            id: newID,
            name: item.name,
            price: item.price,
            date: now.toLocaleDateString("en-US")
        }
        return orderItem;
    }

}

export let shoppingAPIProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: ShoppingAPIInterceptor,
    multi: true
};