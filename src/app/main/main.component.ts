import { Component, OnInit } from '@angular/core';
import { TaskService } from "../services/task.service";
import { UserService } from '../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  tasks:any;
  user:any;
  profile:string ;

  constructor(private _taskservice: TaskService , 
    private _userservice: UserService, 
    private _flash: FlashMessagesService,  
    private _router: Router ,
    private _adminservice: AdminService
    ) { }

  ngOnInit() {
    this.afterdeleterefresh()
  }

  delete_task(task_id){
    this._taskservice.deletetask(task_id).subscribe(resp => {

      if(!resp.success){
        this._flash.show( resp.messages , { cssClass : 'alert-danger'} );
      }
      else {
        this.afterdeleterefresh();
        this._flash.show( "Task Deleted" , { cssClass : 'alert-success'} );
      }
      this._router.navigate(['/main']);
    }
    );
  }

  private afterdeleterefresh(){

    if(this._userservice.isLoggedIn()){
      this.profile="My Profile"
      this.user =  this._userservice.getcurrentuser();
      const query = {owner : this.user.id};
      this._taskservice.gettasks(query).subscribe(resp => {this.tasks = resp.tasks});
    }

    if(this._adminservice.isadminLoggedIn()){
      this.profile="Patient Profile"
      this.user =  this._adminservice.getcurrentpatient();
      const query = {owner : this.user.id};
      this._adminservice.getpatienttasks(query).subscribe(resp => {this.tasks = resp.tasks});
    }

  }

  complete_task(task_id){

    const edittask = {
      done : true
    }

    this._taskservice.updatetask(task_id,edittask).subscribe(
      resp => {

        if(!resp.success){
          this._flash.show( resp.messages , { cssClass : 'alert-danger'} );
        }
        else {
          this.afterdeleterefresh();
          this._flash.show( "Task #"+task_id+" Updated" , { cssClass : 'alert-success'} );
        }
        this._router.navigate(['/main']);
      }
    );

  }

}
