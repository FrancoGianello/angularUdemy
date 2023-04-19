
import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
    name: 'imagen',
    
})
export class Imagen implements PipeTransform {

    transform(heroe: Heroe): string {
        if(!heroe.alt_img && !heroe.id) return "assets/no-image.png"

        if(heroe.alt_img) return `${heroe.alt_img}`

        return `assets/heroes/${heroe.id}.jpg`
    }
}