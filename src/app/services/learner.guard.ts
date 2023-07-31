import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearnerGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'Normal') {
      return true;
    }
    this.router.navigate(['login']);
    console.log('true userin a');
    return false;
    
  }
}
