import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { HomeComponent } from './ui/home/home.component';
import { HeaderComponent } from './ui/components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nome-progetto';
}


