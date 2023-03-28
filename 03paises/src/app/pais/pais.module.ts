import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    DetallePaisComponent
  ],
  exports:[
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule { }
