import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname: string;
  lname: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  age: string;
  status: string = "Registeration Status";

  constructor(private _userservice: UserService, private _flash: FlashMessagesService, private _router: Router) { }

  ngOnInit() {
  }

  onregister() {

    if (!this.fname || !this.lname || !this.email || !this.password || !this.address || !this.phone || !this.age) {
      this.status = "Registeration Failed , Please Fill all Fields Correctly";
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }

    this.status = "Regiteration Completed"
    const user = {
      name: this.fname + " " + this.lname,
      email: this.email,
      password: this.password,
      address: this.address,
      phone: this.phone,
      age: this.age
    }
    this._userservice.creataccount(user).subscribe(
      resp => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }

        this._flash.show('Account was created', { cssClass: 'alert-success' });
        return this._router.navigate(['/signin']);
      }
    );
  }
}
