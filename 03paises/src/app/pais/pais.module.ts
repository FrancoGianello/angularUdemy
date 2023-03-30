import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    DetallePaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:[
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule
  ]
})
export class PaisModule { }
