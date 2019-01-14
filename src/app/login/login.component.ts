import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ErrorStateMatcher } from '@angular/material';
import {
  LOGIN_ACCOUNT_USERNAME,
  LOGIN_ACCOUNT_PASSWORD,
  LOGIN_TITLE_LOGINNAME,
  LOGIN_TITLE_LOGINBUTTON,
  LOGIN_TITLE_LABLE,
  LOGIN_ERR_FAIL_LOGIN
} from '../message';

export class LoginStateError implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  LOGIN_ACCOUNT_USERNAME = LOGIN_ACCOUNT_USERNAME;
  LOGIN_ACCOUNT_PASSWORD = LOGIN_ACCOUNT_PASSWORD;
  LOGIN_TITLE_LOGINNAME = LOGIN_TITLE_LOGINNAME;
  LOGIN_TITLE_LOGINBUTTON = LOGIN_TITLE_LOGINBUTTON;
  LOGIN_TITLE_LABLE = LOGIN_TITLE_LABLE;
  LOGIN_ERR_FAIL_LOGIN = LOGIN_ERR_FAIL_LOGIN;
  isLoginFail = false;
  account: FormGroup;
  matcher = new LoginStateError();
  constructor(
    private commonService: CommonService,
    private route: Router,
  ) { }
  get username() {
    return this.account.get('username');
  }
  get password() {
    return this.account.get('password');
  }
  login() {
    this.commonService.login(this.account.value).subscribe(res => {
      if (res.error) {
        this.isLoginFail = true;
      } else {
        this.isLoginFail = false;
        this.route.navigate(['/']);
      }
    });
  }
  ngOnInit() {
    this.account = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }

}
