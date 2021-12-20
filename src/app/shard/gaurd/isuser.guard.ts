import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../authService/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsuserGuard implements CanActivate {
  constructor(private auth_ser: UserService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth_ser.isLoggedIn !== true) {
        this.router.navigate(['../login'])
      }
    return true;
  }
  
}
