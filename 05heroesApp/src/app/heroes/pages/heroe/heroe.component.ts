import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { pipe, switchMap } from 'rxjs';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe!:Heroe

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router){}
  

  ngOnInit(){
    this.activatedRoute.params.pipe(
      switchMap( ({id})=>this.heroesService.getHero(id))
    ).subscribe(
      ans=> this.heroe=ans
    )
  }

  regresar(){
    this.router.navigate(["/heroes/listado"])
  }
}
