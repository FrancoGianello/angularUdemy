import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localEs from "@angular/common/locales/es"
import localFr from "@angular/common/locales/fr"
import { registerLocaleData } from "@angular/common"

registerLocaleData(localEs)
registerLocaleData(localFr)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
