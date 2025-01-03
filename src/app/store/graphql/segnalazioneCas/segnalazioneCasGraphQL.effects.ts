// store/segnalazioni.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SegnalazioniService } from '../../../api/services/graphql/segnalazioneCasService/segnalazione-cas-graphql.service';
import * as SegnalazioniActions from './segnalazioneCasGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SegnalazioniEffects {
  constructor(private actions$: Actions, private segnalazioniService: SegnalazioniService) {}

  // Effetto per caricare tutte le segnalazioni con gestione degli errori
  loadSegnalazioni$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SegnalazioniActions.loadSegnalazioni),
      mergeMap(() =>
        this.segnalazioniService.findAllSegnalazioni().pipe(
          map((segnalazioni) =>
            SegnalazioniActions.loadSegnalazioniSuccess({ segnalazioni })
          ),
          catchError((error) =>
            of(SegnalazioniActions.loadSegnalazioniFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Effetto per caricare una segnalazione per ID con validazione sicura
  loadSegnalazioneById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SegnalazioniActions.loadSegnalazioneById),
      mergeMap((action) =>
        this.segnalazioniService.findSegnalazioneById(action.id).pipe(
          map((segnalazione) =>
            segnalazione
              ? SegnalazioniActions.loadSegnalazioneByIdSuccess({ segnalazione })
              : SegnalazioniActions.loadSegnalazioneByIdFailure({ error: 'Segnalazione non trovata' })
          ),
          catchError((error) =>
            of(SegnalazioniActions.loadSegnalazioneByIdFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
