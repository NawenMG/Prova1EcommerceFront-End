// store/cronologia.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CronologiaActions from './cronologiaAraRest.actions';
import { CronologiaState, initialState } from './cronologiaAraRest.state';

export const cronologiaReducer = createReducer(
  initialState,
  on(CronologiaActions.loadCronologia, (state) => ({ ...state, loading: true })),
  on(CronologiaActions.loadCronologiaSuccess, (state, { cronologia }) => ({
    ...state,
    cronologia,
    loading: false,
    error: null
  })),
  on(CronologiaActions.loadCronologiaFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(CronologiaActions.eliminaSingolaRicercaSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(CronologiaActions.eliminaTutteLeRicercheSuccess, (state) => ({
    ...state,
    cronologia: null,
    loading: false
  }))
);
