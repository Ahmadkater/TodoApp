import { Component, OnInit } from '@angular/core';
import * as AppUtil from '../common/app.util';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  key: string;
  pname: string;
  pphone: string;

  constructor(private _adminservice: AdminService, private _flash: FlashMessagesService, private _router: Router) { }

  ngOnInit() {
  }

  onenter() {
    if (!this.pname || !this.pphone) {
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }
    if (this.key == "1234") {
      localStorage.setItem(AppUtil.Admin_key, this.key);
    }
    else if(!(this.key == "1234")) {
      this._flash.show("Invalid Admin Key", { cssClass: "alert-danger" });
      return false;
    }

    const patient = {
      name: this.pname,
      phone: this.pphone
    }

    this._adminservice.getpatient(patient).subscribe(
      resp => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }
      this._adminservice.savepatientdata(resp.user);
      console.log(resp.user)
      this._flash.show(resp.message, { cssClass: "alert-success" });
      this._router.navigate(["/main"]);
    }
    );
  }
}
