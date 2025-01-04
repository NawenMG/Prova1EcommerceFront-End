// store/setting-site.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as SettingSiteActions from './settingSiteAraRest.actions';
import { SettingSiteState, initialState } from './settingSiteAraRest.state';

export const settingSiteReducer = createReducer(
  initialState,
  on(SettingSiteActions.loadImpostazioni, (state) => ({ ...state, loading: true })),
  on(SettingSiteActions.loadImpostazioniSuccess, (state, { settings }) => ({
    ...state,
    settings,
    loading: false,
    error: null
  })),
  on(SettingSiteActions.loadImpostazioniFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(SettingSiteActions.salvaImpostazioniSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(SettingSiteActions.salvaImpostazioniFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(SettingSiteActions.resetImpostazioniSuccess, (state) => ({
    ...state,
    settings: null,
    loading: false
  })),
  on(SettingSiteActions.resetImpostazioniFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
