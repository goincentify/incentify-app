import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@app/models';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/users', httpOptions);
  }

}
