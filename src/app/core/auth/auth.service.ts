import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  attemptAuth(username: string, password: string): Observable<any> {
    const credentials = { username: username, password: password };
    console.log('attempAuth ::');
    return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
  }

  public isAuthenticated(): boolean {
    return this.getToken != null;
  }
}
