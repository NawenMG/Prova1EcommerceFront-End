// store/wishlist.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as WishListActions from './wishListAraRest.actions';
import { WishListState, initialState } from './wishListAraRest.state';

export const wishListReducer = createReducer(
  initialState,
  on(WishListActions.loadWishList, (state) => ({ ...state, loading: true })),
  on(WishListActions.loadWishListSuccess, (state, { wishList }) => ({
    ...state,
    wishList,
    loading: false,
    error: null
  })),
  on(WishListActions.loadWishListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(WishListActions.rimuoviProdottoSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(WishListActions.resetWishListSuccess, (state) => ({
    ...state,
    wishList: null,
    loading: false
  }))
);
