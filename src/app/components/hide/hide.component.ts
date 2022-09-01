import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { Hero, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hide',
  templateUrl: './hide.component.html',
  styleUrls: ['./hide.component.css']
})
export class HideComponent implements OnInit {
  heroes: Hero[] = [];
  param: string = ''; 

  constructor(private activatedRoute: ActivatedRoute, private _HeroD: HeroesService, private router:Router) { 
    this.activatedRoute.params.subscribe(params => {
      console.log("🚀 ~ file: hide.component.ts ~ line 21 ~ HideComponent ~ constructor ~ params", params['str']);
      this.param = params['str'];
      this.show();
    }
    );
    
  }

  ngOnInit(): void {
    console.log("parametro es ",this.param);
    this.show()
  }
  showMore(id:string){
    console.log(id);
    this.router.navigate(['/heroD',id]);
    
  }
  clear(){
    this.param = '';
  }
  show(){
    
    const pipe = new FilterPipe();
    this.heroes = pipe.transform(this._HeroD.getHeroes(),this.param);
    console.log(this.heroes);
  }

}
