import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from '../mock-data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
