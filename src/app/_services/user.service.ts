import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.post(`${environment.apiUrl}/users/update/${user.id}`, user);
    }

    updatePassword(id: number, p: String) {
        return this.http.post(`${environment.apiUrl}/users/update/password/${id}`, p);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }

    addPoints(points: number) {
        return this.http.post(`${environment.apiUrl}/users/points/add`, points);
    }

    redeem(code: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/redeem`, code);
    }

    // NONSTANDARD FUNCTIONS

}