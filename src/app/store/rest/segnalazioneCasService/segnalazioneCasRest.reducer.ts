// store/segnalazioni.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as SegnalazioniActions from './segnalazioneCasRest.actions';
import { SegnalazioniState, initialState } from './segnalazioneCasRest.state';

export const segnalazioniReducer = createReducer(
  initialState,
  on(SegnalazioniActions.loadSegnalazioni, (state) => ({ ...state, loading: true })),
  on(SegnalazioniActions.loadSegnalazioniSuccess, (state, { segnalazioni }) => ({
    ...state,
    segnalazioni,
    loading: false,
    error: null
  })),
  on(SegnalazioniActions.loadSegnalazioniFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
