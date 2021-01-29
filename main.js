document.getElementById("btn5").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Acinema&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
       
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });

});

//theatre

document.getElementById("btn6").addEventListener("click", function(){
    console.log(map.getLayers());
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Atheatre&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Anightclub&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Arestaurant&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Acafe&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json,{});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Abar&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Ahostel&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Ahotel&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Apark&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Azoo&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Acamp&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
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
    fetch('http://localhost:8080/geoserver/TourApp/ows?service=WFS&version=1.1.0.0&request=GetFeature&typeName=TourApp%3Amuseum&maxFeatures=50&outputFormat=application%2Fjson')
         .then(function(response){
            console.log(response);
            //console.log(response.url)
            return(response.json());
            //return response.url;
        })
        .then(function(json){
            var features = new ol.format.GeoJSON().readFeatures(json, {});
            vectSource.clear();
            vectSource.addFeatures(features);
            map.getView().fit(vectSource.getExtent(), map.getSize());
            map.addLayer(vectLayer);
            console.log(json);
            return json.features;
        })
        .catch(function(err){
            console.log(err);
        });

        
});

//style

 var strokeStyle = new ol.style.Stroke({
     color:'rgba(255, 0, 0, 1)',
     width:4
 })
var regularShape = new ol.style.RegularShape({
    fill: new ol.style.Fill({
        color:'#3399CC'
    }),
    stroke: strokeStyle,
    rdius:5,
    point:3
})

//fill
var fillStyle = new ol.style.Fill({
    color:'rgba(255, , 0, 1)'
})
//source vector
var vectSource = new ol.source.Vector({
    url:'' ,
    format: new ol.format.GeoJSON()

  });


//vector layer
  var vectLayer = new ol.layer.Vector({
    source: vectSource,
    // style: new ol.style.Style({
    //     image: new ol.style.Circle({
    //         stroke: new ol.style.Stroke({
    //             color: 'red',
    //             width: 1
    //         }),
    //         redius: 5, 
    //         fill: null
    //   })
    
    // })

  });
  console.log(vectLayer);
//map
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
    })],
});
 

//vector popup
var overlayContainerElement = document.querySelector('.overly-container');
var overlayLayer = new ol.Overlay({
    element:overlayContainerElement
})

map.addOverlay(overlayLayer);
var overlayFeatureName = document.getElementById('feature-name');
var overlayFeatureAdditionalinfo = document.getElementById('feature-additionalinfo');
//interaction
map.on('pointermove', function(e){
    overlayLayer.setPosition(undefined);
    map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
        var clickedCoordinate = e.coordinate;
        var clickedFeatureName = feature.get('name');
        // console.log(feature.get('name'));
        var clickedFeatureAdditionalinfo = JSON.stringify(feature.get('tags'));
        overlayLayer.setPosition(clickedCoordinate);
        overlayFeatureName.innerHTML = clickedFeatureName;
        overlayFeatureAdditionalinfo.innerHTML = clickedFeatureAdditionalinfo;

    })
})