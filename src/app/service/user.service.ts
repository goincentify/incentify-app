import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of, EMPTY } from 'rxjs';
import { User } from '@app/models';
import { AuthService } from '@app/core';
import { switchMap, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  public currentUser: Observable<User>;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  private userUrl = 'http://localhost:8080';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/users', httpOptions);
  }

  setCurrentUser(username: String): Observable<User> {
    this.currentUser = this.http.get<User>(this.userUrl + `/user/?username=${username}`, httpOptions).pipe(
      take(1),
      switchMap(user => {
          if (user) {
              console.log(of(user));
              return of(user);
          } else {
            this.router.navigate(['login']);
            console.log("Error getting user");
            return EMPTY;
          }
        })
    );
    return this.currentUser;
  }

  public getUser(username: String): Observable<User> {
    return this.http.get<User>(this.userUrl + `/user/?id=${username}`, httpOptions);
  }

}
