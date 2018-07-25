import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(account): Observable<any> {
    const loginUrl = 'api/DemoUsers/login';
    return this.http.post(loginUrl, account, httpOptions)
      .pipe(
        tap((res) =>  res),
        catchError(err => of(err))
      );
  }

}

