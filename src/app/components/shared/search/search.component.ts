import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Hero } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterPost = '';
  post: Hero[] = [];
  constructor(private router: Router, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.post = this._heroesService.getHeroes();
    console.log(this.post)
  }

  filter(str: string) {
    console.log("working");
    if (str !== '') {
      this.router.navigate(['/hide', str]);
    }

  }

}
