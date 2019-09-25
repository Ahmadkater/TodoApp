import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: "string";
  password: "password";

  constructor(private _userservice: UserService, private _flash: FlashMessagesService, private _router: Router) { }

  ngOnInit() {
  }

  onsignin() {
    if (!this.email || !this.password) {
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }
    const user = {
      email: this.email,
      password: this.password
    }
    this._userservice.auth(user).subscribe(
      resp => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }
        this._userservice.saveUserDate(resp.user.token, resp.user);
        console.log(resp.user)
        this._flash.show('logging In', { cssClass: 'alert-success' });
        return this._router.navigate(['/main']);
      }
    );
  }
}
