import { AfterViewInit, Component } from '@angular/core';
import { Map, Overlay, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, useGeographic } from 'ol/proj';  // Importa la funzione useGeographic
import TileWMS from 'ol/source/TileWMS';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // Coordinate dell'azienda
  lat = 38.186684494525956;
  lng = 15.524375030686777;
  zoom = 15; // livello di zoom
  map!: Map;
  isSatelliteView: boolean = false;



  ngAfterViewInit() {
    useGeographic();
    this.initMap();
  }

  private initMap(): void {
    //Visualizzazione mappa
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [this.lng, this.lat],
        zoom: this.zoom
      })
    });
     // Aggiungo un marker nel centro della mappa
  this.map.once('postrender', () => {
    const center = this.map.getView().getCenter() as [number, number];

    const marker = new Overlay({
      position: center,
      positioning: 'center-center',
      element: document.getElementById('marker')!,
      stopEvent: false
    });
    const label = new Overlay({
      position: center,
      element: document.getElementById('label')!,
      stopEvent: false
    });
     // Aggiungi eventi per mostrare/nascondere l'etichetta
     marker.getElement()!.addEventListener('pointerenter', () => {
      label.getElement()!.style.display = 'block';
    });

    marker.getElement()!.addEventListener('pointerleave', () => {
      label.getElement()!.style.display = 'none';
    });
    this.map.addOverlay(marker);
    this.map.addOverlay(label);
  });
  
  }

 /*  toggleMapStyle(): void {
    // Cambia lo stile della mappa tra normale e satellitare
    this.isSatelliteView = !this.isSatelliteView;

    if (this.isSatelliteView) {
      this.map.getLayers().setAt(0, new TileLayer({
        source: new TileWMS({
          url: 'https://your-satellite-tile-service-url',
          params: { 'LAYERS': 'satellite' }
        })
      }));
    } else {
      this.map.getLayers().setAt(0, new TileLayer({
        source: new OSM()
      }));
    }
  } */
}
