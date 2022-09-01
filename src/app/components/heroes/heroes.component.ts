import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Hero } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  filtePost = '';	
  heroes: Hero[] = []
  constructor( private _heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
    this.heroes= this._heroesService.getHeroes();
    console.log(this.heroes)
  }
  showMore(id:number){
    console.log(id);
    this.router.navigate(['/heroD',id]);
    
  }

}
