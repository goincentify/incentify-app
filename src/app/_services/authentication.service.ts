import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { MEMORY } from '@app/constants';
import { environment } from '@environments/environment';
import { User, RewardItems, users, couponCodes } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(MEMORY.user)));
        this.currentUser = this.currentUserSubject.asObservable();
        if (!localStorage.getItem(MEMORY.rewards) || localStorage.getItem(MEMORY.version) != MEMORY.currentVersion.toString()) {
            this.initialize();
        };
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    initialize() {
        console.log("Initializing...")
        localStorage.setItem(MEMORY.rewardCodes, JSON.stringify(couponCodes));
        localStorage.setItem(MEMORY.rewards, JSON.stringify(RewardItems));
        localStorage.setItem(MEMORY.users, JSON.stringify(users));
        localStorage.setItem(MEMORY.version, JSON.stringify(MEMORY.currentVersion));
        console.log("Initialized.")
    }

    login(username: string, password: string) {

        if (!localStorage.getItem(MEMORY.users)) {
            this.initialize();
        }

        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(MEMORY.user, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    updateUser() {
        this.currentUserSubject.next(JSON.parse(localStorage.getItem(MEMORY.user)));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(MEMORY.user);
        this.currentUserSubject.next(null);
    }
}