import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css']
})
export class DonutHttpComponent implements OnInit {

  constructor(private graficasService:GraficasService){}
  ngOnInit(): void {
    // this.graficasService.getRedesSociales()
    //   .subscribe(m=>{
    //     this.doughnutChartLabels= Object.keys(m)
    //     this.doughnutChartData.labels=this.doughnutChartLabels
    //     this.doughnutChartData.datasets[0].data=Object.values(m)
    //   })
    
    this.graficasService.getRedesSocialesFormatDonut()
      .subscribe(({labels, data})=>{
        this.doughnutChartLabels=labels
        this.doughnutChartData.labels=this.doughnutChartLabels
        this.doughnutChartData.datasets[0].data=data
      })

  }
  public colorArray:Color[] = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6','#66664D'];
  // Doughnut
  public doughnutChartLabels: string[] = [ 
      // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
    ];
  public doughnutChartData: ChartData<'doughnut'>={
    labels:this.doughnutChartLabels,
    datasets:[
      {data:[ 350, 450, 100 ]}
    ]
  }
  public doughnutChartType: ChartType = 'doughnut';
  // events

}
