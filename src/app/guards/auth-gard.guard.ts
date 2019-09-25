import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _adminservice: AdminService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._userService.isLoggedIn() || this._adminservice.isadminLoggedIn()) {
      return true;
    }
    
    this._router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
