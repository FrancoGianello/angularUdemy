import { Component } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';
@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {

  // labels
  public annos: string[] = ['2021', '2022','2023','2024','2025'];
  
  // proveedores 
  public proveedoresChart: ChartData<'bar'> = {
    labels: this.annos,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  }
  // producto 
  public productoChart: ChartData<'bar'> = {
    labels:this.annos,
    datasets: [ 
      { data:[200, 300,400,300, 150 ], label:'carros', backgroundColor:"blue"}, 
    ],
  }
}
