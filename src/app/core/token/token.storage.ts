import { Injectable } from '@angular/core';
import { GLOBAL } from '@app/constants';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TokenStorage {

  constructor(private router: Router) { }

  signOut() {
    window.localStorage.clear();
    this.router.navigate(['login']);
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(GLOBAL.TOKEN_KEY);
    window.localStorage.setItem(GLOBAL.TOKEN_KEY, token);
  }
  
  public getToken(): string {
    return localStorage.getItem(GLOBAL.TOKEN_KEY);
  }

}
