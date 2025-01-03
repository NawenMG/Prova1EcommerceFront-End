// store/schede-prodotti.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as SchedeProdottiActions from './schedaProdottoMonRest.actions';
import { SchedeProdottiState, initialState } from './schedaProdottoMonRest.state';

export const schedeProdottiReducer = createReducer(
  initialState,
  on(SchedeProdottiActions.loadSchedeProdottiByNome, (state) => ({ ...state, loading: true })),
  on(SchedeProdottiActions.loadSchedeProdottiByNomeSuccess, (state, { schedeProdotti }) => ({
    ...state,
    schedeProdotti,
    loading: false,
    error: null
  })),
  on(SchedeProdottiActions.loadSchedeProdottiByNomeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
