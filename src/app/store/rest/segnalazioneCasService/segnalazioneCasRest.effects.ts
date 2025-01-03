// store/segnalazioni.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SegnalazioniService } from '../../../api/services/rest/segnalazioneCasService/segnalazione-cas-rest.service';
import * as SegnalazioniActions from './segnalazioneCasRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SegnalazioniEffects {
  constructor(private actions$: Actions, private segnalazioniService: SegnalazioniService) {}

  loadSegnalazioni$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SegnalazioniActions.loadSegnalazioni),
      mergeMap(() =>
        this.segnalazioniService.getAllSegnalazioni().pipe(
          map((segnalazioni) => SegnalazioniActions.loadSegnalazioniSuccess({ segnalazioni })),
          catchError((error) => of(SegnalazioniActions.loadSegnalazioniFailure({ error: error.message })))
        )
      )
    )
  );
}
