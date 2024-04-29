import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailComponent],
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
}
