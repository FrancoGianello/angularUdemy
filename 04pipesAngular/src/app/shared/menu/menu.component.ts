import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  items: MenuItem[] = [];

  constructor(){}

  ngOnInit() {
    this.items = [
        {
            label:"Pipes angular",
            icon:"pi pi-desktop",
            items:[
                {
                    label:"Textos etc",
                    icon:"pi pi-bell",
                    routerLink:'/'
                },
                {
                    label:"Numeros",
                    icon:"pi pi-dollar",
                    routerLink:'numeros'
                },
                {
                    label:"No-comunes",
                    icon:"pi pi-globe",
                    routerLink:'no-comunes'
                }
            ]
        },
        {
            label:"Personalizados",
            icon:"pi pi-cog",
            routerLink:"ordenar"
        }
    ];
}
}