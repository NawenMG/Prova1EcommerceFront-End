import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { DropdownSeriesComponent } from "../components/dropdown-series/dropdown-series.component";
import { FooterComponent } from "../components/footer/footer.component";
import { FilterComponent } from "../components/filter/filter.component";
import { ListComponent } from "../components/list/list.component";
import { PaginationComponent } from "../components/pagination/pagination.component";

@Component({
  selector: 'app-list-products',
  imports: [HeaderComponent, DropdownSeriesComponent, FooterComponent, FilterComponent, ListComponent, PaginationComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  standalone: true
})
export class ListProductsComponent {

}
