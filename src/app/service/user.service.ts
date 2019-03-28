import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of, EMPTY } from 'rxjs';
import { User } from '@app/models';
import { AuthService } from '@app/core';
import { switchMap, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  public currentUser: Observable<User>;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`, httpOptions);
  }

  public getUser(username: String): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/getUserByUsername/?username=${username}`, httpOptions);
  }

  public getById(id: number) {
      return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  public register(user: User) {
      return this.http.post(`${environment.apiUrl}/users/register`, user, httpOptions);
  }

  public update(user: User) {
      return this.http.post(`${environment.apiUrl}/users/update/${user.id}`, user, httpOptions);
  }

  public updatePassword(id: number, p: String) {
      return this.http.post(`${environment.apiUrl}/users/update/password/${id}`, p, httpOptions);
  }

  public delete(id: number) {
      return this.http.delete(`${environment.apiUrl}/users/${id}`, httpOptions);
  }

  public addPoints(points: number) {
      return this.http.post(`${environment.apiUrl}/users/points/add`, points, httpOptions);
  }

  public redeem(code: string) {
      return this.http.post<any>(`${environment.apiUrl}/users/redeem`, code, httpOptions);
  }

}
