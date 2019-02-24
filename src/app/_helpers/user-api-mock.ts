import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { users, User, CouponCode } from '@app/_models';
import { MEMORY } from '@app/constants'
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

@Injectable()
export class UserAPIInterceptor implements HttpInterceptor {

    users: any[];

    constructor() {
        this.users = localStorage.getItem(MEMORY.users) ? JSON.parse(localStorage.getItem(MEMORY.users)) : users;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials

                let filteredUsers = this.users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    user.token = 'fake-jwt-token';
                    let body = user;

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: this.users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = this.users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                let newUser: User = request.body;

                // validation
                let duplicateUser = this.users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }

                // save new user
                newUser.id = this.users.length + 1;
                newUser.job = "Employee";
                newUser.tier = "One";
                newUser.bio = "New User Bio";
                newUser.interests = "New User Interests";
                newUser.picture = "";
                newUser.tier = "Silver";
                newUser.points = Math.round(Math.random() * (5000 - 1000) + 1000);
                newUser.totaldays = Math.random() * (90 - 10) + 10;
                newUser.totaldays_percentile = Math.random() * (99 - 50) + 50;
                newUser.ontimedays = Math.round(newUser.totaldays * (Math.random() * (0.7 - 0.5) + 0.5));
                newUser.ontimepercent_percentile = Math.random() * (70 - 45) + 45;
                newUser.daystreak = Math.round(Math.random() * (20 - 5) + 5);
                newUser.daystreak_percentile = Math.random() * (99 - 50) + 50;
                newUser.cart = [];
                newUser.orders = [];
                this.users.push(newUser);
                localStorage.setItem(MEMORY.users, JSON.stringify(this.users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // add points to user
            if (request.url.endsWith('/users/points/add') && request.method === 'POST') {

                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    // get new user object from post body
                    let addPoints: number = request.body;

                    // validation
                    let currentUser: User = JSON.parse(localStorage.getItem(MEMORY.user));
                    let users: User[] = JSON.parse(localStorage.getItem(MEMORY.users));

                    currentUser.points = +currentUser.points + +addPoints;

                    users.forEach(user => {
                        if (user.id == currentUser.id) {
                            user.points = currentUser.points;
                        }
                    });

                    localStorage.setItem(MEMORY.user, JSON.stringify(currentUser));
                    localStorage.setItem(MEMORY.users, JSON.stringify(users));

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // redeem valid code
            if (request.url.endsWith('/users/redeem') && request.method === 'POST') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    var validateCode: string = request.body;

                    console.log(validateCode);

                    var users: User[] = JSON.parse(localStorage.getItem(MEMORY.users));
                    var currentUser: User = JSON.parse(localStorage.getItem(MEMORY.user));
                    var codes: CouponCode[] = localStorage.getItem(MEMORY.rewardCodes) ? JSON.parse(localStorage.getItem(MEMORY.rewardCodes)) : [];

                    var valid = false;
                    var addPoints = 0;
                    var message = "";

                    codes.forEach(code => {
                        if (code.name == validateCode && code.redeemedBy.indexOf(currentUser.id) < 0) {
                            code.redeemedBy.push(currentUser.id);
                            addPoints = code.value;
                            valid = true;
                        }
                    });

                    if (!valid) {
                        return of(new HttpResponse({ status: 200, body: { valid: false, message: message } }));
                    }

                    currentUser.points = +currentUser.points + +addPoints;

                    //Set User Points
                    users.forEach(user => {
                        if (user.id == currentUser.id) {
                            user.points = currentUser.points;
                        }
                    });

                    localStorage.setItem(MEMORY.rewardCodes, JSON.stringify(codes));
                    localStorage.setItem(MEMORY.user, JSON.stringify(currentUser));
                    localStorage.setItem(MEMORY.users, JSON.stringify(users));

                    return of(new HttpResponse({ status: 200, body: { valid: true, message: message } }));

                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // update password
            if (request.url.match(/\/users\/update\/password\/\d+$/) && request.method === 'POST') {

                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    //If request body is valid, set newUser, else keep current user
                    let p: string = request.body ? request.body : null;

                    if (p) {
                        let urlParts = request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);

                        let user: User = JSON.parse(localStorage.getItem(MEMORY.user));
                        let users: User[] = JSON.parse(localStorage.getItem(MEMORY.users));

                        users = users.filter(user => { return (user.id != id) });

                        user.password = p;
                        users.push(user);

                        localStorage.setItem(MEMORY.user, JSON.stringify(user));
                        localStorage.setItem(MEMORY.users, JSON.stringify(users));

                        // respond 200 OK
                        return of(new HttpResponse({ status: 200, body: "Password Updated." }));
                    } else {
                        return of(new HttpResponse({ status: 200, body: "No change made." }));
                    }
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // update user
            if (request.url.match(/\/users\/update\/\d+$/) && request.method === 'POST') {

                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    //If request body is valid, set newUser, else keep current user
                    let newUser: User = request.body ? request.body : JSON.parse(localStorage.getItem(MEMORY.user));

                    let users: User[] = JSON.parse(localStorage.getItem(MEMORY.users));

                    users = users.filter(user => { return (user.id != id) });

                    users.push(newUser);

                    localStorage.setItem(MEMORY.user, JSON.stringify(newUser));
                    localStorage.setItem(MEMORY.users, JSON.stringify(users));

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200, body: { user: newUser } }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < this.users.length; i++) {
                        let user = this.users[i];
                        if (user.id === id) {
                            // delete user
                            this.users.splice(i, 1);
                            localStorage.setItem(MEMORY.users, JSON.stringify(this.users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
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
}

export let userAPIProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: UserAPIInterceptor,
    multi: true
};