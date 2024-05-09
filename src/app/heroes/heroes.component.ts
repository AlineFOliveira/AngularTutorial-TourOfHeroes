import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [RouterLink, FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
 
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero.id).subscribe();
    }

    
}