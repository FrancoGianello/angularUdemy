import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild("buscarHistorial") buscarHistorial!:ElementRef<HTMLAnchorElement>
  get historial():string[]{
    return[...this.gifsService.historial]
  }
  buscarGifs(query:string){
    return this.gifsService.buscarGifs(query)
  }
  constructor(private gifsService:GifsService){}
}
