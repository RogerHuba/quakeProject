'use strict'

var yesOrNo = false;
var map;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);

  console.log(map);

}

      
  //sorts by magnitude 
      // window.eqfeed_callback = function(results) { 
      //   for (var i = 0; i < 10; i++) {
      //       console.log(typeof(results));
      //       console.log(typeof(results.features));
      //       console.log(typeof(results.features[i].properties.mag));
      //       if(results.features[i].properties.mag > 5){
      //           var coords = results.features[i].geometry.coordinates;
      //           var latLng = new google.maps.LatLng(coords[1],coords[0]);
      //           var marker = new google.maps.Marker({
      //               position: latLng,
      //               map: map,
      //           });
      //       }
      //     console.log(results);
      //     //localStorage.setItem("earthquakeKey", JSON.stringify(results));
      //   }
      // }

//sorts throught the string
window.eqfeed_callback = function(results) { 
  for (var i = 0; i < results.features.length; i++) {
      console.log(typeof(results.features[i].properties.place));
      var strInput=results.features[i].properties.place;
      if(/*strInput.includes('Philippines') || filter1 && filter2 && filter3*/ yesOrNo) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
              position: latLng,
              map: map,
          });
      }
    console.log(results);
    //localStorage.setItem("earthquakeKey", JSON.stringify(results));
  }
}

function reDrawMap() {
  yesOrNo = true;

  window.eqfeed_callback;
}      

reDrawMap();






  


     
