import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take, filter } from 'rxjs/operators';
import { AuthService } from '~core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userIsAdmin();
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.userIsAdmin();
  }
  userIsAdmin(): Observable<boolean> {
    return this.auth.getCurrentUser().pipe(
      map(user => user && user.role === 'Administrator'),
      tap(canload => {
        if (!canload) {
          console.log('error. goback to home.');
          this.router.navigate(['/home']);
        }
      }),
      take(1),
    );
  }
}
