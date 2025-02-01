/* import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FilterComponent } from "../components/filter/filter.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../components/footer/footer.component";
import { UserSoapService, User } from '../../api/services/soap/userRelService/user-rel-rest.service';
import { NotificationsWebSocketService, Notification } from '../../api/services/webSocket/notificationsFireService/notifications-fire-ws.service';
// IMPORTA IL SERVIZIO REST PER LE SEGNALAZIONI (che include il metodo updateSegnalazione, aggiornato per gestire lo stato 'risolto')
import { SegnalazioniService, Segnalazione } from '../../api/services/rest/segnalazioneCasService/segnalazione-cas-rest.service';

@Component({
  selector: 'app-admin-ui',
  imports: [HeaderComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css'],
  standalone: true,
})
export class AdminUiComponent {
  // Configurazione per la prima tabella (UTENTI)
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
      { id: 1, info1: 'Mark', info2: 'Otto', info3: 'mark@example.com', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 2, info1: 'Jacob', info2: 'Thornton', info3: 'jacob@example.com', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 3, info1: 'Larry', info2: 'the Bird', info3: 'larry@example.com', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 4, info1: 'Alice', info2: 'Wonderland', info3: 'alice@example.com', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 5, info1: 'First', info2: 'Last', info3: 'first@example.com', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 6, info1: 'Jane', info2: 'Doe', info3: 'jane@example.com', shieldClicked: false, planeClicked: false, warningClicked: false },
      { id: 7, info1: 'John', info2: 'Smith', info3: 'john@example.com', shieldClicked: false, planeClicked: false, warningClicked: false },
    ],
    visibleRows: []
  };

  // Configurazione per la seconda tabella (SEGNALAZIONI)
  table2: {
    allRows: {
      id: number;
      info1: string;
      info2: string;
      info3: string;
      shieldClicked: boolean;
      planeClicked: boolean;
      warningClicked: boolean;
      // Proprietà ausiliaria per lo stato (risolto); se non presente si considera false
      risolto?: boolean;
    }[];
    visibleRows: {
      id: number;
      info1: string;
      info2: string;
      info3: string;
      shieldClicked: boolean;
      planeClicked: boolean;
      warningClicked: boolean;
      risolto?: boolean;
    }[];
  } = {
    allRows: [
      { id: 1, info1: 'Adam', info2: 'Johnson', info3: '@adamj', shieldClicked: false, planeClicked: false, warningClicked: false, risolto: false },
      { id: 2, info1: 'Eve', info2: 'Smith', info3: '@evesmith', shieldClicked: false, planeClicked: false, warningClicked: false, risolto: false },
      { id: 3, info1: 'Charlie', info2: 'Brown', info3: '@charlieb', shieldClicked: false, planeClicked: false, warningClicked: false, risolto: false },
      { id: 4, info1: 'Sophia', info2: 'Turner', info3: '@sophiat', shieldClicked: false, planeClicked: false, warningClicked: false, risolto: false },
      { id: 5, info1: 'Olivia', info2: 'Taylor', info3: '@oliviat', shieldClicked: false, planeClicked: false, warningClicked: false, risolto: false },
    ],
    visibleRows: []
  };

  // Proprietà per la gestione degli utenti tramite il servizio SOAP
  userData: User | null = null;
  userError: string | null = null;
  searchUsername: string = '';

  // Proprietà per la gestione delle notifiche via WebSocket (invio email)
  notificationTitle: string = '';
  notificationContent: string = '';
  notificationResponse: string = '';

  // Proprietà per la gestione delle segnalazioni tramite REST (modifica stato)
  segnalazioni: Segnalazione[] = [];
  segnalazioneError: string | null = null;

  constructor(
    private userSoapService: UserSoapService,
    private notificationsWebSocketService: NotificationsWebSocketService,
    private segnalazioniService: SegnalazioniService
  ) {}

  ngOnInit() {
    // Inizializza le righe visibili per entrambe le tabelle
    this.table1.visibleRows = this.table1.allRows.slice(0, 2);
    this.table2.visibleRows = this.table2.allRows.slice(0, 2);

    // Carica le segnalazioni degli utenti (dal servizio REST)
    this.loadSegnalazioni();
  }

  // Metodo per alternare lo stato delle icone (usato nelle tabelle per operazioni standard)
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

  // Metodo per trovare un utente per nome utente tramite il servizio SOAP
  findUserByNomeUtente(): void {
    if (!this.searchUsername.trim()) {
      return;
    }
    this.userSoapService.findUserByNomeUtente(this.searchUsername).subscribe(
      (user: User | null) => {
        if (user) {
          this.userData = user;
          this.userError = null;
          console.log('Utente trovato:', user);
        } else {
          this.userData = null;
          this.userError = 'Utente non trovato';
          console.log('Utente non trovato per nome utente:', this.searchUsername);
        }
      },
      (error) => {
        console.error('Errore durante la ricerca dell\'utente:', error);
        this.userData = null;
        this.userError = 'Errore durante la ricerca dell\'utente';
      }
    );
  }

  // Metodo per inviare l'email a un utente specifico (funzionalità collegata all'icona paper plane nella tabella UTENTI)
  sendEmail(row: any): void {
    // Supponiamo che row.info3 contenga l'email dell'utente
    const email = row.info3;
    const newNotification: Notification = {
      id: this.generateNotificationId(),
      titolo: `Email a ${row.info1}`,
      contenuto: `Invio email a ${email}`,
    };
    this.notificationsWebSocketService.createNotification(newNotification).subscribe(() => {
      console.log('Email inviata per l\'utente:', row);
    }, (error) => {
      console.error('Errore nell\'invio dell\'email:', error);
    });
  }

  // Metodo per generare un ID casuale per la notifica
  private generateNotificationId(): string {
    return Math.random().toString(36).substring(2, 15);
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
        this.segnalazioneError = 'Errore nel caricamento delle segnalazioni';
      }
    );
  }

  // Metodo per aggiornare lo stato di una segnalazione (risolto o meno) tramite REST
  // (in questo esempio, il metodo updateSegnalazione accetta due parametri: l'id e un booleano "risolto")
  updateSegnalazioneStato(id: string, risolto: boolean): void {
    this.segnalazioniService.updateSegnalazione(id, risolto).subscribe(() => {
      console.log(`Stato della segnalazione ${id} aggiornato a ${risolto ? 'risolto' : 'non risolto'}.`);
      // Ricarica le segnalazioni aggiornate
      this.loadSegnalazioni();
    }, (error) => {
      console.error('Errore durante l\'aggiornamento dello stato della segnalazione:', error);
    });
  }

  // Nuovo metodo per il cambio di stato della segnalazione, da invocare dall'icona shield alt della tabella SEGNALAZIONI
  changeSegnalazioneState(row: any): void {
    // Se la proprietà "risolto" non è definita, si considera false
    const currentState = row.risolto || false;
    this.updateSegnalazioneStato(row.id.toString(), !currentState);
    // Aggiorna la proprietà locale per riflettere il nuovo stato (utile per l'icona)
    row.risolto = !currentState;
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
  selector: 'app-admin-ui',
  imports: [HeaderComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './admin-ui.component.html',
  styleUrl: './admin-ui.component.css',
  standalone: true,
})
export class AdminUiComponent {
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
