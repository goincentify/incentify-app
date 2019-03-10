import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '@app/models';
import { AuthService } from '@app/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private authService: AuthService) { }

  private userUrl = 'http://localhost:8080';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/users', httpOptions);
  }

  setCurrentUser(username: String): boolean {
    let userFound: boolean;
    this.http.get<User>(this.userUrl + `/user/?username=${username}`, httpOptions).subscribe(
      data => {
        let user: User = data;
        this.currentUserSubject = new BehaviorSubject<User>(user);
        this.currentUser = this.currentUserSubject.asObservable();
        userFound = true;
        console.log(user);
      },
      error => {
        userFound = false;
        console.log("Error finding User ::: " + username);
        console.error(error);
      }
    )
    return userFound;
  }

  public getUser(username: String): Observable<User> {
    return this.http.get<User>(this.userUrl + `/user/?id=${username}`, httpOptions);
  }

}
