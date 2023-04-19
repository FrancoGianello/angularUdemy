import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { IndexComponent } from './pages/index/index.component';

const routes:Routes = [
  {
    path:"",
    component:IndexComponent,
    children:[
      {
        path:"listado",
        component:ListadoComponent
      },
      {
        path:"agregar",
        component:AgregarComponent
      },
      {
        path:"agregar/edit/:id",
        component:AgregarComponent
      },
      {
        path:"buscar",
        component:BuscarComponent
      },
      {
        path:":id",
        component:HeroeComponent
      },
      {
        path:"**",
        redirectTo:"listado"
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
