import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, 
  Router, CanMatch,
  Route,
  UrlSegment} from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class AuthGuard implements CanActivate, CanMatch{
  constructor(private authService:AuthService, private router:Router){}
  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      if(!this.authService.isLoggedIn()){
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }

};
