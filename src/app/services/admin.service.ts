import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs-compat/add/operator/map";
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http : HttpClient) { }

  savepatientdata(patient) {
    localStorage.setItem(AppUtil.PATIENT_INFO, JSON.stringify(patient));
  }
  
  isadminLoggedIn() :boolean {
    //TODO: Enhace this method. angular2-jwt
    return !!localStorage.getItem(AppUtil.Admin_key);
  }
  getpatient(patient){
    return this._http.post<any>('http://localhost:3000/users/patient', patient).map(resp => resp);
  }
  logOut() {
    localStorage.removeItem(AppUtil.Admin_key);
    localStorage.removeItem(AppUtil.PATIENT_INFO);
  }
  getcurrentpatient(){
    return JSON.parse(localStorage.getItem(AppUtil.PATIENT_INFO));
  };
  getpatienttasks(id){
    return this._http.post<any>('http://localhost:3000/tasks/patient', id).map(resp => resp);
  }
}
