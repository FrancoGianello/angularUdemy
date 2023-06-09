import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif  } from '../interfaces/gifs.interfaces';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados():Gif []{
    return this.gifsService.resultados
  }

  constructor(private gifsService:GifsService){
    this.gifsService.resultados=JSON.parse(localStorage.getItem("resultados")!)||[]
  }
}
