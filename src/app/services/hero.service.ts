import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    // Simulate async
    // const randomDelay = Math.floor(Math.random() * 5000);
    // const heroes = of(HEROES).pipe(delay(randomDelay), tap(val => console.log('HeroService: fetched heroes')));

    return heroes;
  }
}
