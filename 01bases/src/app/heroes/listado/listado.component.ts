import { Component  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["spiderman", "yo", "messi", "messi2", "mesii"]
  heroeBorrado:string = "..."
  borrarHeroe():void{
    // this.heroes.pop()
    this.heroeBorrado = this.heroes.shift() ||"..."
  }
}
