import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower:string = "fernando"
  nombreUpper:string = "FERNANDO"
  nombreCompleto:string = "FernAndo heRrera"

  fecha: Date = new Date()
}
