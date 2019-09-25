import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs-compat/add/operator/map";
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  createheader(){

    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return httpOptions
  }

  savetask(task){
    
    return this._http.post<any>('http://localhost:3000/tasks/add',task, this.createheader()).map(resp => resp);
  }

  gettasks(query){
    return this._http.post<any>('http://localhost:3000/tasks/list',query, this.createheader()).map(resp => resp);
  }
  deletetask(taskid){
    const url = `http://localhost:3000/tasks/remove/${taskid}`
    return this._http.delete<any>(url, this.createheader()).map(resp => resp);
  }
  updatetask(taskid,taskedit){
    const url = `http://localhost:3000/tasks/edit/${taskid}`
    return this._http.put<any>(url,taskedit).map(resp => resp);
  }
}
