// store/setting-site.actions.ts
import { createAction, props } from '@ngrx/store';
import { SettingSite } from './settingSiteAraRest.state';

// Caricamento delle impostazioni
export const loadImpostazioni = createAction(
  '[SettingSite] Load Impostazioni',
  props<{ userId: string }>()
);

export const loadImpostazioniSuccess = createAction(
  '[SettingSite] Load Impostazioni Success',
  props<{ settings: SettingSite }>()
);

export const loadImpostazioniFailure = createAction(
  '[SettingSite] Load Impostazioni Failure',
  props<{ error: string }>()
);

// Salvataggio delle impostazioni
export const salvaImpostazioni = createAction(
  '[SettingSite] Salva Impostazioni',
  props<{ userId: string; settings: SettingSite }>()
);

export const salvaImpostazioniSuccess = createAction(
  '[SettingSite] Salva Impostazioni Success'
);

export const salvaImpostazioniFailure = createAction(
  '[SettingSite] Salva Impostazioni Failure',
  props<{ error: string }>()
);

// Reset delle impostazioni
export const resetImpostazioni = createAction(
  '[SettingSite] Reset Impostazioni',
  props<{ userId: string }>()
);

export const resetImpostazioniSuccess = createAction('[SettingSite] Reset Impostazioni Success');

export const resetImpostazioniFailure = createAction(
  '[SettingSite] Reset Impostazioni Failure',
  props<{ error: string }>()
);
