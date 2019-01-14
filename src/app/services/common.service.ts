import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  login(account): Observable<any> {
    return this.authService.login(account);
    // const loginUrl = 'api/DemoUsers/login';
    // return this.http.post(loginUrl, account, httpOptions)
    //   .pipe(
    //     tap((res) =>  res),
    //     catchError(err => of(err))
    //   );
  }

}

