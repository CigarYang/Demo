/*
 * @Author: Chao Yang
 * @Date: 2017-08-25 08:19:27
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2017-09-04 09:27:46
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterInput } from '../../models/account/register/input';
import { AccountService } from '../../services/account/account.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nankingcigar-demo-account-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  _registerInput: RegisterInput;

  constructor(
    private _accountService: AccountService,
    private _router: Router) {
  }

  ngOnInit() {
    this._registerInput = new RegisterInput();
  }

  onSubmit() {
    this._accountService.register(this._registerInput).subscribe(
      data => this._router.navigate(['login'])
    );
  }

  onBlurUserName(e) {
    this._registerInput.userName = this._registerInput.userName.trim();
  }

  onBlurEmail(e) {
    this._registerInput.email = this._registerInput.email.trim();
  }
}