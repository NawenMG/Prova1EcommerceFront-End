// store/schede-prodotti.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as SchedeProdottiActions from './schedaProdottoMonGraphQL.actions';
import { SchedeProdottiState, initialState } from './schedaProdottoMonGraphQL.state';

export const schedeProdottiReducer = createReducer(
  initialState,
  on(SchedeProdottiActions.loadSchedeProdotti, (state) => ({ ...state, loading: true })),
  on(SchedeProdottiActions.loadSchedeProdottiSuccess, (state, { schedeProdotti }) => ({
    ...state,
    schedeProdotti,
    loading: false,
    error: null
  })),
  on(SchedeProdottiActions.loadSchedeProdottiFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
