import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FilterComponent } from "../components/filter/filter.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../components/footer/footer.component";


@Component({
  selector: 'app-controllerui',
  imports: [HeaderComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './controllerui.component.html',
  styleUrl: './controllerui.component.css',
  standalone: true
})
export class ControlleruiComponent {
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
