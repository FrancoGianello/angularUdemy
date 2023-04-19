import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  termino:string=""
  heroes:Heroe[]=[]

  heroeSeleccionado!:Heroe | undefined

  constructor(private heroesService:HeroesService){}

  opcionSeleccionada(evento:MatAutocompleteSelectedEvent){

    if(!evento.option.value){
      this.heroeSeleccionado=undefined
      return 
    }

    const heroe:Heroe = evento.option.value
    this.termino=heroe.superhero
    this.heroesService.getHero(heroe.id!).subscribe(
      ans=>this.heroeSeleccionado=ans
    )
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino).subscribe(
      ans=>this.heroes=ans
    )
  }
}
