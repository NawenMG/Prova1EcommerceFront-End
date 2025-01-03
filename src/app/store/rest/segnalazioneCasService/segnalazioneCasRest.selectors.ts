// store/segnalazioni.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SegnalazioniState } from './segnalazioneCasRest.state';

export const selectSegnalazioniState = createFeatureSelector<SegnalazioniState>('segnalazioni');

export const selectAllSegnalazioni = createSelector(
  selectSegnalazioniState,
  (state) => state.segnalazioni
);

export const selectLoading = createSelector(
  selectSegnalazioniState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectSegnalazioniState,
  (state) => state.error
);
