

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, of } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';

/// JWT + Sessioni Selectors
import { selectIsAuthenticated, selectUserRole } from '../store/securityStore/storeJWT+Sessioni/auth.selectors';

/// OAuth2 Selectors
import { selectIsAuthenticatedOAuth, selectUserRoleOAuth } from '../store/securityStore/storeOAuth2/oauth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return combineLatest([
      this.store.select(selectIsAuthenticated),
      this.store.select(selectIsAuthenticatedOAuth),
      this.store.select(selectUserRole),
      this.store.select(selectUserRoleOAuth)
    ]).pipe(
      take(1),
      switchMap(([isAuthenticatedJWT, isAuthenticatedOAuth, userRoleJWT, userRoleOAuth]) => {
        const isAuthenticated = isAuthenticatedJWT || isAuthenticatedOAuth;
        const userRole = userRoleJWT || userRoleOAuth;

        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          return of(false);
        }

        // ✅ Controllo se è richiesto un ruolo specifico per la route
        const requiredRoles: string[] = route.data['roles'];
        if (requiredRoles && !requiredRoles.includes(userRole)) {
          this.router.navigate(['/access-denied']);
          return of(false);
        }

       /*  // ✅ Controllo se è richiesto un userId specifico (ad esempio per profili personali o dati sensibili)
        const requiredUserId: string = route.data['userId'];
        if (requiredUserId && userId !== requiredUserId) {
          this.router.navigate(['/access-denied']);
          return of(false);
        } */

        return of(true);
      })
    );
  }
}
