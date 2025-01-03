// store/segnalazioni.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as SegnalazioniActions from './segnalazioneCasGraphQL.actions';
import { SegnalazioniState, initialState } from './segnalazioneCasGraphQL.state';

export const segnalazioniReducer = createReducer(
  initialState,
  on(SegnalazioniActions.loadSegnalazioni, (state) => ({
    ...state,
    loading: true
  })),
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
  })),
  on(SegnalazioniActions.loadSegnalazioneByIdSuccess, (state, { segnalazione }) => ({
    ...state,
    selectedSegnalazione: segnalazione,
    loading: false,
    error: null
  })),
  on(SegnalazioniActions.loadSegnalazioneByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
