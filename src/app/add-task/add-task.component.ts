import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private _taskservice: TaskService,private _userservice: UserService, private _flash: FlashMessagesService, private _router: Router) { }

  name:string;
  done: boolean;
  owner:string;
  date:string;
  time:string;

  ngOnInit() {
    const user =  this._userservice.getcurrentuser();
    this.owner = user.id ;
    this.done = false ;
  }

  onAddTask(){
    if(!this.name || !this.date || !this.time){
      this._flash.show('All Fields Are Required ', { cssClass :'alert-danger' });
      return false;
    }

    const task = {
      name:this.name,
      owner:this.owner,
      date:this.date,
      time:this.time,
      done:this.done
    }

    this._taskservice.savetask(task).subscribe(
      resp => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }
      this._flash.show('Task Saved ', { cssClass :'alert-success' });
      this._router.navigate(['/main']);
    }
    );
  }
}
