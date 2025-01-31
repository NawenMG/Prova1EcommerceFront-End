/* import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gsap from 'gsap';

/// GRAPHQL SERVIZIO SCHEDE PRODOTTI
import { SchedeProdottiState } from '../../../store/graphql/schedaProdottoMon/schedaProdottoMonGraphQL.state';
import { loadSchedeProdotti } from '../../../store/graphql/schedaProdottoMon/schedaProdottoMonGraphQL.actions';
import { selectAllSchedeProdotti } from '../../../store/graphql/schedaProdottoMon/schedaProdottoMonGraphQL.selectors';
import { SchedaProdotto } from '../../../store/graphql/schedaProdottoMon/schedaProdottoMonGraphQL.state';

@Component({
  selector: 'app-scheda-tecnica',
  standalone: true,
  imports: [CommonModule], // ✅ Importa CommonModule per usare async pipe
  templateUrl: './scheda-tecnica.component.html',
  styleUrl: './scheda-tecnica.component.css'
})
export class SchedaTecnicaComponent implements OnInit {
  productId: string = ''; // ✅ L'ID verrà estratto dalla route
  schedaProdotto$: Observable<SchedaProdotto | undefined> = new Observable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private store: Store<SchedeProdottiState>,
    private route: ActivatedRoute
  ) {}

  /// ✅ Recupera la scheda tecnica del prodotto basandosi sull'ID dalla route
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.productId = id; // ✅ Salva l'ID del prodotto

        /// ✅ Dispatch per caricare la scheda tecnica
        this.store.dispatch(loadSchedeProdotti({ paramQuery: { id: this.productId }, schedeProdotti: {} }));

        /// ✅ Seleziona la scheda tecnica dallo stato globale
        this.schedaProdotto$ = this.store.select(selectAllSchedeProdotti).pipe(
          map(schede => schede.find(s => s.id === this.productId))
        );
      }
    });
  }
}
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-scheda-tecnica',
  imports: [],
  templateUrl: './scheda-tecnica.component.html',
  styleUrl: './scheda-tecnica.component.css',
  standalone: true
})
export class SchedaTecnicaComponent {

}
