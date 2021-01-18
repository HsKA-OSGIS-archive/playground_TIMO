
//theatre
//var x = map.getLayers();
// navigator.serviceWorker.register('/sw.js');
// function theatre(){
//     //map.addLayer(imageLayer);
//     if( map.getLayers().N.length = 1){
//         result.updateParams({'LAYERS': 'TourApp:theatre'})
//          map.addLayer(imageLayer);
//      }else{
//         map.getLayers().pop();
//      }
//     console.log(map.getLayers().N.length);
// }
//cinema
function cinema(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:cinema'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}
//nightclub
function nightclub(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:nightclub'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}
//taxi
function taxi(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:taxi'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}
//hostel

function hostel(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:hostel'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//restaurant
function restaurant(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:restaurant'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//bar
function bar(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:bar'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//cafe
function cafe(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:cafe'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//park
function park(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:park'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//zoo
function zoo(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:zoo'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//museum
function museum(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:museum'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//campSite
function campSite(){
    //map.addLayer(imageLayer);
        if( map.getLayers().N.length = 1){
           result.updateParams({'LAYERS': 'TourApp:camp'})
            map.addLayer(imageLayer);
        }else{
            map.getLayers().pop();
        }
    console.log(map.getLayers().N.length);
}

//Image source
var result = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': ''},
    ratio: 1,
    serverType: 'geoserver',
    crossOrigin: 'null',
   })


//imageLayer
var imageLayer =  new ol.layer.Image({
    source: result
});

//Map
var map = new ol.Map({
        target : 'mymap',
        view :new ol.View({
            center :[935745.1771832169, 6276914.714459252],
            zoom : 12
        }),
        layers:[new ol.layer.Tile({
            source : new ol.source.OSM({
                attributions : 'created for tourist app'
            })
        })]
    });

    /**
 * Popup
 **/
var
container = document.getElementById('popup'),
content_element = document.getElementById('popup-content'),
closer = document.getElementById('popup-closer');

closer.onclick = function() {
overlay.setPosition(undefined);
closer.blur();
return false;
};
var overlay = new ol.Overlay({
element: container,
autoPan: true,
offset: [0, -10]
});
map.addOverlay(overlay);

var fullscreen = new ol.control.FullScreen();
map.addControl(fullscreen);

map.on('click', function(evt){
var feature = map.forEachFeatureAtPixel(evt.pixel,
  function(feature, layer) {
    return feature;
  });
if (feature) {
    var geometry = feature.getGeometry();
    var coord = geometry.getCoordinates();
    
    var content = '<h3>' + feature.get('name') + '</h3>';
    content += '<h5>' + feature.get('description') + '</h5>';
    
    content_element.innerHTML = content;
    overlay.setPosition(coord);
    
    console.info(feature.getProperties());
}
});
map.on('pointermove', function(e) {
if (e.dragging) return;
   
var pixel = map.getEventPixel(e.originalEvent);
var hit = map.hasFeatureAtPixel(pixel);

map.getTarget().style.cursor = hit ? 'pointer' : '';
});

    // var vectorSource = new ol.source.Vector();
    // fetch('http://localhost:8080/geoserver/TourApp/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=TourApp:bar')
    // .then(function(response){
    //     console.log(response.text());
    //     return response;
    //     })
    //     .then(function (json) {
    //         var features = new ol.format.GeoJSON().readFeatures(json);
    //         console.log(features.text());
    //         //vectorSource.addFeatures(features);
    //         //map.getView().fit(vectorSource.getExtent());
    //       });