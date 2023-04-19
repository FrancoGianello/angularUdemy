import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms"

import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { IndexComponent } from './pages/index/index.component';
import { ListadoComponent } from './pages/listado/listado.component';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { Imagen } from './pipes/imagen.pipe';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    IndexComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ConfirmDialogComponent,

    Imagen
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
