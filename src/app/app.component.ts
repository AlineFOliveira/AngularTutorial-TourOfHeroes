import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroesComponent,
    FormsModule,
    HeroDetailComponent,
    MessagesComponent,
    RouterLink,
    HttpClientModule,




  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor() {
    // Configuração do HttpClientInMemoryWebApiModule no construtor do componente
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false });
  }
}
