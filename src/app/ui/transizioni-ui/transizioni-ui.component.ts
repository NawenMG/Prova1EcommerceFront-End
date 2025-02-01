/* import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FilterComponent } from "../components/filter/filter.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../components/footer/footer.component";
// Importa il servizio REST per le segnalazioni (che include i metodi getAllSegnalazioni e createSegnalazione)
import { SegnalazioniService, Segnalazione } from '../../api/services/rest/segnalazioneCasService/segnalazione-cas-rest.service';

@Component({
  selector: 'app-transizioni-ui',
  imports: [HeaderComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './transizioni-ui.component.html',
  styleUrls: ['./transizioni-ui.component.css'],
  standalone: true
})
export class SegnalazioniUiComponent {
  // Configurazione per la prima tabella
  table1: {
    allRows: {
      id: number;
      info1: string;
      info2: string;
      info3: string;
      shieldClicked: boolean;
      planeClicked: boolean;
      warningClicked: boolean;
    }[];
    visibleRows: {
      id: number;
      info1: string;
      info2: string;
      info3: string;
      shieldClicked: boolean;
      planeClicked: boolean;
      warningClicked: boolean;
    }[];
  } = {
    allRows: [
      { id: 1, info1: 'Segnalazione 1', info2: 'Descrizione 1', info3: 'Data 1', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 2, info1: 'Segnalazione 2', info2: 'Descrizione 2', info3: 'Data 2', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 3, info1: 'Segnalazione 3', info2: 'Descrizione 3', info3: 'Data 3', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 4, info1: 'Segnalazione 4', info2: 'Descrizione 4', info3: 'Data 4', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 5, info1: 'Segnalazione 5', info2: 'Descrizione 5', info3: 'Data 5', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 6, info1: 'Segnalazione 6', info2: 'Descrizione 6', info3: 'Data 6', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 7, info1: 'Segnalazione 7', info2: 'Descrizione 7', info3: 'Data 7', shieldClicked: false, planeClicked: false, warningClicked: false },
    ],
    visibleRows: []
  };

  // Configurazione per la seconda tabella (eventualmente per altri dati correlati)
  table2: {
    allRows: {
      id: number;
      info1: string;
      info2: string;
      info3: string;
      shieldClicked: boolean;
      planeClicked: boolean;
      warningClicked: boolean;
    }[];
    visibleRows: {
      id: number;
      info1: string;
      info2: string;
      info3: string;
      shieldClicked: boolean;
      planeClicked: boolean;
      warningClicked: boolean;
    }[];
  } = {
    allRows: [
      { id: 1, info1: 'Altra 1', info2: 'Altro 1', info3: 'Dettaglio 1', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 2, info1: 'Altra 2', info2: 'Altro 2', info3: 'Dettaglio 2', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 3, info1: 'Altra 3', info2: 'Altro 3', info3: 'Dettaglio 3', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 4, info1: 'Altra 4', info2: 'Altro 4', info3: 'Dettaglio 4', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 5, info1: 'Altra 5', info2: 'Altro 5', info3: 'Dettaglio 5', shieldClicked: false, planeClicked: false, warningClicked: false },
    ],
    visibleRows: []
  };

  // Proprietà per la visualizzazione delle segnalazioni caricate tramite REST
  segnalazioni: Segnalazione[] = [];

  // Proprietà per l'inizializzazione (creazione) di una nuova segnalazione
  newSegnalazione: Segnalazione = {
    id: '',
    titolo: '',
    descrizione: '',
    dataCreazione: ''
  };

  constructor(private segnalazioniService: SegnalazioniService) {}

  ngOnInit() {
    // Inizializza le righe visibili per entrambe le tabelle
    this.table1.visibleRows = this.table1.allRows.slice(0, 2);
    this.table2.visibleRows = this.table2.allRows.slice(0, 2);

    // Carica tutte le segnalazioni tramite REST
    this.loadSegnalazioni();
  }

  // Metodo per alternare lo stato delle icone (base per entrambe le tabelle)
  toggleIcon(row: any, iconKey: string, tableName: 'table1' | 'table2') {
    row[iconKey] = !row[iconKey];
  }

  // Mostra tutte le righe per una tabella specifica
  showAllRows(tableName: 'table1' | 'table2') {
    this[tableName].visibleRows = [...this[tableName].allRows];
  }

  // Mostra solo le righe iniziali per una tabella specifica
  showInitialRows(tableName: 'table1' | 'table2') {
    this[tableName].visibleRows = this[tableName].allRows.slice(0, 2);
  }

  // Metodo per caricare tutte le segnalazioni tramite REST
  loadSegnalazioni(): void {
    this.segnalazioniService.getAllSegnalazioni().subscribe(
      (segnalazioni: Segnalazione[]) => {
        this.segnalazioni = segnalazioni;
        console.log('Segnalazioni caricate:', segnalazioni);
      },
      (error) => {
        console.error('Errore nel caricamento delle segnalazioni:', error);
      }
    );
  }

  // Metodo per inizializzare (creare) una nuova segnalazione tramite REST
  initSegnalazione(): void {
    // Imposta dei valori di default per la nuova segnalazione (personalizza secondo necessità)
    this.newSegnalazione = {
      id: '', // L'id potrà essere generato dal server
      titolo: 'Nuova Segnalazione',
      descrizione: 'Descrizione iniziale della segnalazione',
      dataCreazione: new Date().toISOString()
    };

    this.segnalazioniService.createSegnalazione(this.newSegnalazione).subscribe(() => {
      console.log('Segnalazione inizializzata con successo:', this.newSegnalazione);
      // Ricarica la lista delle segnalazioni per includere quella appena creata
      this.loadSegnalazioni();
      // Resetta il form di inizializzazione (opzionale)
      this.newSegnalazione = { id: '', titolo: '', descrizione: '', dataCreazione: '' };
    }, (error) => {
      console.error('Errore durante l\'inizializzazione della segnalazione:', error);
    });
  }
}
 */


import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FilterComponent } from "../components/filter/filter.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-transizioni-ui',
  imports: [HeaderComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './transizioni-ui.component.html',
  styleUrl: './transizioni-ui.component.css',
  standalone: true
})
export class TransizioniUiComponent {
  // Configurazione per la prima tabella
  table1: { allRows: { id: number; info1: string; info2: string; info3: string; shieldClicked: boolean; planeClicked: boolean; warningClicked: boolean; }[], visibleRows: { id: number; info1: string; info2: string; info3: string; shieldClicked: boolean; planeClicked: boolean; warningClicked: boolean; }[] } = {
    allRows: [
      { id: 1, info1: 'Mark', info2: 'Otto', info3: '@mdo', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 2, info1: 'Jacob', info2: 'Thornton', info3: '@fat', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 3, info1: 'Larry', info2: 'the Bird', info3: '@twitter', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 4, info1: 'Alice', info2: 'Wonderland', info3: '@alice', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 5, info1: 'First', info2: 'Last', info3: 'Handle', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 6, info1: 'Jane', info2: 'Doe', info3: '@jdoe', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 7, info1: 'John', info2: 'Smith', info3: '@jsmith', shieldClicked: false, planeClicked: false, warningClicked: false },
    ],
    visibleRows: []
  };

  // Configurazione per la seconda tabella
  table2: { allRows: { id: number; info1: string; info2: string; info3: string; shieldClicked: boolean; planeClicked: boolean; warningClicked: boolean; }[], visibleRows: { id: number; info1: string; info2: string; info3: string; shieldClicked: boolean; planeClicked: boolean; warningClicked: boolean; }[] } = {
    allRows: [
      { id: 1, info1: 'Adam', info2: 'Johnson', info3: '@adamj', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 2, info1: 'Eve', info2: 'Smith', info3: '@evesmith', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 3, info1: 'Charlie', info2: 'Brown', info3: '@charlieb', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 4, info1: 'Sophia', info2: 'Turner', info3: '@sophiat', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 5, info1: 'Olivia', info2: 'Taylor', info3: '@oliviat', shieldClicked: false, planeClicked: false, warningClicked: false },
    ],
    visibleRows: []
  };

  ngOnInit() {
    // Inizializza le righe visibili per entrambe le tabelle
    this.table1.visibleRows = this.table1.allRows.slice(0, 2);
    this.table2.visibleRows = this.table2.allRows.slice(0, 2);
  }

  // Metodo per alternare lo stato delle icone
  toggleIcon(row: any, iconKey: string, tableName: 'table1' | 'table2') {
    row[iconKey] = !row[iconKey];
  }

  // Mostra tutte le righe per una tabella specifica
  showAllRows(tableName: 'table1' | 'table2') {
    this[tableName].visibleRows = [...this[tableName].allRows];
  }

  // Mostra solo le righe iniziali per una tabella specifica
  showInitialRows(tableName: 'table1' | 'table2') {
    this[tableName].visibleRows = this[tableName].allRows.slice(0, 2);
  }

}
