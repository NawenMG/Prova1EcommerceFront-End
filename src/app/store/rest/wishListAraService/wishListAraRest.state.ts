// store/wishlist.state.ts
export interface Prodotto {
  id: string;
  nome: string;
  prezzo: number;
}

export interface WishList {
  userId: string;
  prodotti: Prodotto[];
}

export interface WishListState {
  wishList: WishList | null;
  loading: boolean;
  error: string | null;
}

export const initialState: WishListState = {
  wishList: null,
  loading: false,
  error: null
};
