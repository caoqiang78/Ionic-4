import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogin = false;

  get islogin() {
    return this._isLogin;
  }
  constructor() { }

  login() {
    this._isLogin = true;
  }

  logout() {
    this._isLogin = false;
  }
}
