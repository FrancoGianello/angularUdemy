import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap!:ElementRef
  public map!:mapboxgl.Map;
  public zoom:number=10;
  public zoomMax:number=20
  public zoomMin:number=0
  public center:[number, number]=[-3.6919052116876867, 40.41314501079684, ]

  constructor(){}
  ngOnDestroy(): void {
    this.map.off('zoom',()=>{})
    this.map.off('zoomend',()=>{})
    this.map.off('move',()=>{})
  }
  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.map.on('zoom', ()=>this.zoom=this.map.getZoom())
    this.map.on('zoomend', ()=>{
      if(this.map.getZoom()>this.zoomMax){
        this.map.zoomTo(this.zoomMax)
      }
    })

    this.map.on('move', (event)=>{
      const target = event.target
      const {lng, lat} = target.getCenter()
      this.center=[lng,lat]
    })

  }

  zoomOut(){
    this.map.zoomOut()
    this.zoom=this.map.getZoom()

  }
  zoomIn(){
    this.map.zoomIn()
    this.zoom=this.map.getZoom()
  }

  zoomCambio(value:string){
    this.map.zoomTo(Number(value))
  }

}
