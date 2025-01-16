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
