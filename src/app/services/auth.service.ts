import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { getAuthority, setAuthority } from '../utils/authority';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  login(account): Observable<boolean> {
    return of(true).pipe(
      tap(val => {
        this.isLoggedIn = (setAuthority(account.username) !== 'guest');
      })
    );
  }

  checkAuthority(): boolean {
    return getAuthority();
  }

  logout(): void {
    this.isLoggedIn = (setAuthority('guest') === 'guest');
  }
}
