import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs-compat/add/operator/map";
import * as AppUtil from '../common/app.util';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  creataccount(user) {
    return this._http.post<any>('http://localhost:3000/users/register', user).map(resp => resp);
  }
  auth(user) {
    return this._http.post<any>('http://localhost:3000/users/auth', user).map(resp => resp);
  }
  saveUserDate(token, user) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
  }
  isLoggedIn() :boolean {
    //TODO: Enhace this method. angular2-jwt
    return !!localStorage.getItem(AppUtil.AUTH_TOKEN);
  }

  logOut() {
    localStorage.removeItem(AppUtil.AUTH_TOKEN);
    localStorage.removeItem(AppUtil.USER_INFO);
  }
  getcurrentuser(){
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO));
  }
}

