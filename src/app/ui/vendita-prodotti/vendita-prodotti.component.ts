/* import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// ✅ Import del service e degli NgRx Store
import { ProdottiRestService } from '../../api/services/rest/prodottoRelService/prodotto-rel-rest.service';
import { SchedeProdottiService } from '../../api/services/rest/schedaProdottoMonService/scheda-prodotto-mon-rest.service';

import { inserisciProdotto, loadProdotti } from '../../store/rest/prodottoRelService/prodottoRelRest.actions';
import { selectProdotti, selectLoading, selectError } from '../../store/rest/prodottoRelService/prodottoRelRest.selectors';

import { createSchedaProdotto } from '../../store/rest/schedaProdottoMonService/schedaProdottoMonRest.actions';
import { selectAllSchedeProdotti } from '../../store/rest/schedaProdottoMonService/schedaProdottoMonRest.selectors';

@Component({
  selector: 'app-vendita-prodotti',
  imports: [CommonModule, FormsModule],
  templateUrl: './vendita-prodotti.component.html',
  styleUrl: './vendita-prodotti.component.css',
  standalone: true
})
export class VenditaProdottiComponent {

  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  productName = '';
  productPrice = 0;
  productDescription = '';
  productQuantity = 1;
  productDate = new Date().toISOString();
  sellerInformations: string[] = Array(6).fill('');
  productInfo = [
    { info1: '', info2: '', info3: '' }
  ];

  // Stato NgRx per prodotti e schede tecniche
  prodotti$: Observable<any>;
  schedeProdotti$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store, private router: Router, private prodottiService: ProdottiRestService, private schedeProdottiService: SchedeProdottiService) {
    this.prodotti$ = this.store.select(selectProdotti);
    this.schedeProdotti$ = this.store.select(selectAllSchedeProdotti);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    // Carica i prodotti esistenti
    this.store.dispatch(loadProdotti({ paramQuery: {}, prodotti: {} }));
  }

  // ✅ Metodo per inviare il prodotto in vendita e creare la scheda tecnica
  submitForm() {
    if (this.validateForm()) {
      const productId = Math.random().toString(36).substr(2, 9); // Genera ID casuale

      const newProduct = {
        id: productId,
        nome: this.productName,
        prezzo: this.productPrice
      };

      const newSchedaProdotto = {
        id: productId,
        nome: this.productName,
        descrizione: this.productDescription,
        prezzo: this.productPrice,
        dataInserimento: this.productDate
      };

      // Dispatch per salvare il prodotto e la scheda tecnica
      this.store.dispatch(inserisciProdotto({ prodotto: newProduct }));
      this.store.dispatch(createSchedaProdotto({ prodotto: newSchedaProdotto }));

      alert('Prodotto e scheda tecnica registrati con successo!');
      this.resetForm();
    }
  }

  // ✅ Metodo per aggiungere ulteriori informazioni sul prodotto
  addProductInfo() {
    this.productInfo.push({ info1: '', info2: '', info3: '' });
  }



  // ✅ Metodo per validare il form prima di inviare i dati
  validateForm(): boolean {
    if (!this.productName || this.productPrice <= 0 || !this.productDescription) {
      alert('Tutti i campi obbligatori devono essere compilati!');
      return false;
    }
    return true;
  }

  // ✅ Reset del form dopo l'invio
  resetForm() {
    this.productName = '';
    this.productPrice = 0;
    this.productDescription = '';
    this.productQuantity = 1;
    this.productInfo = [{ info1: '', info2: '', info3: '' }];
  }

// ✅ Metodo modificato per non richiedere parametri
uploadProfilePicture(event?: any) {
  if (event) {
    const file = event.target.files[0];
    if (file) {
      alert('Immagine caricata con successo!');
    }
  } else {
    alert('Seleziona un file prima di caricare!');
  }
}


// ✅ Metodo per rimuovere una riga dalla scheda prodotto
removeProductInfo(index: number) {
  if (this.productInfo.length > 1) {
    this.productInfo.splice(index, 1);
  } else {
    alert("Deve esserci almeno una riga nella scheda prodotto.");
  }
}
}
 */




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendita-prodotti',
  imports: [CommonModule, FormsModule],
  templateUrl: './vendita-prodotti.component.html',
  styleUrl: './vendita-prodotti.component.css',
  standalone: true
})
export class VenditaProdottiComponent {
  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  productName = '';
  productPrice = 0;
  productDescription = '';
  productQuantity = 1;
  sellerInformations: string[] = Array(6).fill('');
  productInfo = [
    { info1: '', info2: '', info3: '' }
  ];

  submitForm() {
    console.log('Dati del prodotto inviati:', this);
    alert('Form inviato con successo!');
  }

  addProductInfo() {
    this.productInfo.push({ info1: '', info2: '', info3: '' });
  }

  uploadProfilePicture() {
    alert('Funzione di caricamento immagine non implementata');
  }

}
