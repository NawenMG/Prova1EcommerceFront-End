// store/carrello.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CarrelloService } from '../../../api/services/rest/carrelloAraService/carrello-ara-rest.service';
import * as CarrelloActions from './carrelloAraRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CarrelloEffects {
  constructor(private actions$: Actions, private carrelloService: CarrelloService) {}

  loadCarrello$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarrelloActions.loadCarrello),
      mergeMap((action) =>
        this.carrelloService.getCarrello(action.userId).pipe(
          map((carrello) => {
            if (carrello === null) {
              throw new Error('Carrello is null');
            }
            return CarrelloActions.loadCarrelloSuccess({ carrello });
          }),
          catchError((error) => of(CarrelloActions.loadCarrelloFailure({ error: error.message })))
        )
      )
    )
  );
}
