import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, EventEmitter } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor{
  color:string,
  marcador?:mapboxgl.Marker,
  centro?:[number,number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap!:ElementRef
  public map!:mapboxgl.Map;
  public zoom:number=15;
  public zoomMax:number=20
  public zoomMin:number=0
  public center:[number, number]=[-3.6919052116876867, 40.41314501079684, ]

  public marcadores: MarcadorColor[]=[]

  // ngOnI

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.leerLocalStorage()
    // const markertHtml: HTMLElement = document.createElement("div")
    // markertHtml.innerHTML="YOO"
    // const marker = new mapboxgl.Marker({element:markertHtml}
    // const marker = new mapboxgl.Marker()
    //   .setLngLat(this.center)
    //   // .setLngLat(this.map.getCenter())
    //   .addTo(this.map);
    // }
  }
  ngOnDestroy(): void {
    this.guardarLocalStorage()
  }


  agregarMarcador(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable:true,
      color:color
    })
      .setLngLat(this.center)
      .addTo(this.map)
    this.marcadores.push({
      color:color,
      marcador:nuevoMarcador
    })
  }

  irMarcador(value:MarcadorColor){
    this.map.flyTo({
      center:value.marcador!.getLngLat()
    })
  }

  guardarLocalStorage(){
    
    const coordenadas:MarcadorColor[]=[]
    this.marcadores.map(m=>{
      const color=m.color
      const {lng, lat}=m.marcador!.getLngLat()

      coordenadas.push({
        color:color,
        centro:[lng,lat]
      })
    })

    localStorage.setItem("marcadores",JSON.stringify(coordenadas))
  }

  leerLocalStorage(){
    if(!localStorage.getItem('marcadores')) return

    const coordenadas:MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!)

    coordenadas.map(m=>{
      const marcador:mapboxgl.Marker = new mapboxgl.Marker({
        color:m.color,
        draggable:true,
      }).setLngLat(m.centro!)
        .addTo(this.map)

      this.marcadores.push({
        color:m.color,
        marcador:marcador
      })
      this.guardarLocalStorage()
      marcador.on('dragend',()=>{
        this.guardarLocalStorage()
      })
    })

  }
  borrarMarcador(index:number){
    console.log("w")
    this.marcadores[index].marcador?.remove()
    this.marcadores.splice(index,1 )
    this.guardarLocalStorage()
  }
}