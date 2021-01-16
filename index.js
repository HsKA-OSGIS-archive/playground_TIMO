import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

var vectSource = new VectorSource({
    url:'' ,
    format: new GeoJSON(),
  });
 vectSource.setUrl('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Abar&maxFeatures=50&outputFormat=application%2Fjson')

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }), new VectorLayer({
        source: vectSource
        // new VectorSource({
        //   url: 'http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Abar&maxFeatures=50&outputFormat=application%2Fjson',
        //   format: new GeoJSON(),
        // })
      })
  ],
  view: new View({
    center: [0, 0],
    zoom: 5
  })
});


  