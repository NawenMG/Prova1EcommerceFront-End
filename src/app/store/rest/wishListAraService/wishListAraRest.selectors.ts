// store/wishlist.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { WishListState } from './wishListAraRest.state';

export const selectWishListState = createFeatureSelector<WishListState>('wishList');

export const selectWishList = createSelector(
  selectWishListState,
  (state) => state.wishList
);

export const selectLoading = createSelector(
  selectWishListState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectWishListState,
  (state) => state.error
);
