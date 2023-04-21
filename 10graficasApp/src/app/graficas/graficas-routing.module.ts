import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"barra", component:BarrasComponent},
      {path:"barra-doble", component:BarrasDobleComponent},
      {path:"donut", component:DonutComponent},
      {path:"donut-http", component:DonutHttpComponent},
      {path:"**", redirectTo:"barra"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
