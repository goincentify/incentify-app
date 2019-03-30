import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { GLOBAL } from '@app/constants';
import { UserService } from '@app/service';
import { TokenStorage } from '../token/token.storage';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private tokenStorage: TokenStorage, private http: HttpClient) { }

  public loggedIn: Observable<boolean>;

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  public getToken(): string {
    return localStorage.getItem(GLOBAL.TOKEN_KEY);
  }

  public getUsername(): string {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      
      return JSON.parse(payload)['sub'];
    } else {
      this.tokenStorage.signOut();
      return null;
    }
  }

  attemptAuth(username: string, password: string): Observable<any> {
    const credentials = { username: username, password: password };
    return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
  }

  public isAuthenticated(): boolean {
    return this.getToken() != null;
  }
}
