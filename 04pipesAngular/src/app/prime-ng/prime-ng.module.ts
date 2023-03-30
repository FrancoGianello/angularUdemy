import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule} from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenuModule,
    MenubarModule
  ],
})
export class PrimeNgModule { }
