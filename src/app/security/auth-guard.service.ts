import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
import { selectIsAuthenticated, selectUserRole } from '../store/securityStore/storeJWT+Sessioni/auth.selectors';

/// OAuth Selectors
import { selectIsAuthenticatedOAuth, selectUserRoleOAuth } from '../store/securityStore/storeOAuth2/oauth.selectors';
///

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return combineLatest([
      this.store.select(selectIsAuthenticated),
      this.store.select(selectIsAuthenticatedOAuth)
    ]).pipe(
      take(1),
      switchMap(([isAuthenticatedJWT, isAuthenticatedOAuth]) => {
        const isAuthenticated = isAuthenticatedJWT || isAuthenticatedOAuth;

        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          return new Observable<boolean>(observer => observer.next(false));
        }

        // Se il percorso richiede un ruolo specifico, lo controlliamo
        const requiredRoles: string[] = route.data['roles'];
        if (requiredRoles) {
          return combineLatest([
            this.store.select(selectUserRole),
            this.store.select(selectUserRoleOAuth)
          ]).pipe(
            take(1),
            map(([userRoleJWT, userRoleOAuth]) => {
              const userRole = userRoleJWT || userRoleOAuth; // Se è autenticato con OAuth, userà quel ruolo
              if (!requiredRoles.includes(userRole)) {
                this.router.navigate(['/access-denied']);
                return false;
              }
              return true;
            })
          );
        }

        return new Observable<boolean>(observer => observer.next(true));
      })
    );
  }
}
