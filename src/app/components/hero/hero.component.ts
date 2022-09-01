import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: any = {};
  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      console.log( params['id'] );
      if (!isNaN(params['id'])){
        this.heroes = this._heroesService.getHero( params['id'] );
      } else {
        this.heroes = this._heroesService.getHeroName( params['id'] );
      }
    } );
  }

  

  ngOnInit(): void {
  }

}
