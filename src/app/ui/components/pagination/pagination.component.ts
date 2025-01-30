import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PaginationComponent {
  @Input() totalItems: number = 0; // Numero totale di prodotti
  @Input() itemsPerPage: number = 35; // Numero di prodotti per pagina
  @Input() currentPage: number = 0; // Pagina corrente
  @Output() pageChanged = new EventEmitter<number>(); // Evento per comunicare il cambio di pagina

  // Metodo per calcolare il numero totale di pagine
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Cambia pagina
  changePage(newPage: number): void {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.pageChanged.emit(newPage);
    }
  }
}
