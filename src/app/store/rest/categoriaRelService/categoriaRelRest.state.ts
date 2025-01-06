// store/categorie.state.ts
export interface Categorie {
  id: string;
  nome: string;
  descrizione: string;
}

export interface CategorieState {
  categorie: Categorie[];
  loading: boolean;
  error: string | null;
}

export const initialState: CategorieState = {
  categorie: [],
  loading: false,
  error: null
};
