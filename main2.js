import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Overlay from 'ol/Overlay';
import {Fill, Stroke, Style} from 'ol/style';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature'
var tedi ="" ;
//cinema
document.getElementById("btn5").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Acinema&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
       
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
    
            for(var feat in features){
            
            }
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });

});

//theatre

document.getElementById("btn6").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Atheatre&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//nightclub
document.getElementById("btn7").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Anightclub&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});
//restaurant
document.getElementById("btn1").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Arestaurant&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//cafe
document.getElementById("btn3").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Acafe&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//bar
document.getElementById("btn4").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Abar&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//hostel
document.getElementById("btn9").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Ahostel&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//hotel
document.getElementById("btn10").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Ahotel&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//park
document.getElementById("btn13").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Apark&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//zoo
document.getElementById("btn14").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Azoo&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//camp

document.getElementById("btn15").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Acamp&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//museum

document.getElementById("btn16").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=TourApp%3Amuseum&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new GeoJSON().readFeatures(json);
            vectSource.clear();
            vectSource.addFeatures(features);
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });
});

//source vector
var vectSource = new VectorSource({
    //fetures:[],
    url:'' ,
    format: new GeoJSON(),
  });
//vector layer
  var vectLayer = new VectorLayer({
    source: vectSource,
  });
  console.log(vectLayer)
//map
var map = new Map({
    target : 'mymap',
    view :new View({
        center :[935745.1771832169, 6276914.714459252],
        zoom : 12
    }),
    layers:[new TileLayer({
        source : new OSM({
            attributions : 'created for tourist app'
        })
    })],
});
console.log(map);

//tooltip
var tooltip = document.getElementById('tooltip');
var overlayed = new Overlay({
  element: tooltip,
  offset: [10, 0],
  positioning: 'bottom-left'
});
map.addOverlay(overlayed);

function displayTooltip(evt) {
  var pixel = evt.pixel;
  var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
    return feature;
  });
  tooltip.style.display = feature ? '' : 'none';
  if (feature) {
    overlay.setPosition(evt.coordinate);
    tooltip.innerHTML = feature.get('name');
  }
};
map.on('pointermove', displayTooltip);
