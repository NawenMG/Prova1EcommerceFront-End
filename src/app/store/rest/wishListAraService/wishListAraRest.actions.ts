// store/wishlist.actions.ts
import { createAction, props } from '@ngrx/store';
import { WishList, Prodotto } from './wishListAraRest.state';

// Aggiungi prodotti alla wishlist
export const aggiungiProdotti = createAction(
  '[WishList] Aggiungi Prodotti',
  props<{ userId: string; prodotti: Prodotto[] }>()
);
export const aggiungiProdottiSuccess = createAction('[WishList] Aggiungi Prodotti Success');
export const aggiungiProdottiFailure = createAction(
  '[WishList] Aggiungi Prodotti Failure',
  props<{ error: string }>()
);

// Caricamento della wishlist
export const loadWishList = createAction(
  '[WishList] Load WishList',
  props<{ userId: string }>()
);
export const loadWishListSuccess = createAction(
  '[WishList] Load WishList Success',
  props<{ wishList: WishList }>()
);
export const loadWishListFailure = createAction(
  '[WishList] Load WishList Failure',
  props<{ error: string }>()
);

// Rimuovi un prodotto dalla wishlist
export const rimuoviProdotto = createAction(
  '[WishList] Rimuovi Prodotto',
  props<{ userId: string; prodottoId: string }>()
);
export const rimuoviProdottoSuccess = createAction('[WishList] Rimuovi Prodotto Success');
export const rimuoviProdottoFailure = createAction(
  '[WishList] Rimuovi Prodotto Failure',
  props<{ error: string }>()
);

// Reset della wishlist
export const resetWishList = createAction(
  '[WishList] Reset WishList',
  props<{ userId: string }>()
);
export const resetWishListSuccess = createAction('[WishList] Reset WishList Success');
export const resetWishListFailure = createAction(
  '[WishList] Reset WishList Failure',
  props<{ error: string }>()
);
