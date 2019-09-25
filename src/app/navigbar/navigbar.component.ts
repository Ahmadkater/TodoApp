import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-navigbar',
  templateUrl: './navigbar.component.html',
  styleUrls: ['./navigbar.component.css']
})
export class NavigbarComponent implements OnInit {

  constructor( private _userService: UserService ,
    private _router: Router,
    private _adminservice : AdminService
    ) { }

  ngOnInit() {}

  onLogOutClicked(){
    if(this._adminservice.isadminLoggedIn()){
      this._adminservice.logOut();
      this._router.navigate(['/admin']);
    }
    else if(this._userService.isLoggedIn()){
      this._userService.logOut();
      this._router.navigate(['/signin']);
    }
    return false;
    
  }
}
