import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { CapitalComponent } from "./pais/pages/capital/capital.component";
import { PaisComponent } from './pais/pages/pais/pais.component';
import { RegionComponent } from "./pais/pages/region/region.component";
import { DetallePaisComponent } from './pais/pages/detalle-pais/detalle-pais.component';

const routes:Routes = [
    {
        path:"",
        component:PaisComponent,
        pathMatch:"full"
    },
    {
        path:"region",
        component:RegionComponent
    },
    {
        path:"capital",
        component:CapitalComponent
    },
    {
        path:"pais/:id",
        component:DetallePaisComponent
    },
    {
        path:'**',
        redirectTo:""
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],

})
export class AppRoutingModule{}