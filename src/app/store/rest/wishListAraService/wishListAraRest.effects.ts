// store/wishlist.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WishListService } from '../../../api/services/rest/wishListAraService/wish-list-ara-rest.service';
import * as WishListActions from './wishListAraRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class WishListEffects {
  constructor(private actions$: Actions, private wishListService: WishListService) {}

  loadWishList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WishListActions.loadWishList),
      mergeMap((action) =>
        this.wishListService.trovaWishList(action.userId).pipe(
          map((wishList) => {
            if (wishList === null) {
              throw new Error('WishList is null');
            }
            return WishListActions.loadWishListSuccess({ wishList });
          }),
          catchError((error) => of(WishListActions.loadWishListFailure({ error: error.message })))
        )
      )
    )
  );
}
