import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SegnalazioniState } from './segnalazioneCasGraphQL.state';

// Selettore principale per accedere allo stato completo
export const selectSegnalazioniState = createFeatureSelector<SegnalazioniState>('segnalazioni');

// Selettore per ottenere tutte le segnalazioni
export const selectAllSegnalazioni = createSelector(
  selectSegnalazioniState,
  (state) => state.segnalazioni
);

// Selettore per ottenere una segnalazione selezionata
export const selectSelectedSegnalazione = createSelector(
  selectSegnalazioniState,
  (state) => state.selectedSegnalazione
);

// Selettore per ottenere lo stato di caricamento
export const selectLoading = createSelector(
  selectSegnalazioniState,
  (state) => state.loading
);

// Selettore per ottenere l'errore
export const selectError = createSelector(
  selectSegnalazioniState,
  (state) => state.error
);
