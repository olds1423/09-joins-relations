'use strict';

function initMap(newMap) {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.611435, lng: -122.330456},
    scrollwheel: true,
    zoom: 8
  });
  // $('#city-select').on('change', function() {
  //   webDB.execute(
  //     'SELECT loc FROM zips WHERE loc="' + $(this).val(); + '";',
  //     function(rows)
  //   if (rows.length){
  //   console.log($(this).val(), 'city value');
  //   rows.forEach(function(a){
  //     $('#city-select').append('<option>' + a.city + '</option>');
  //
  //   });
  // });

  var marker = new google.maps.Marker({
    position: newMap,
    map: map
  });

  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.


/// create something that is variable enough to find the selected object in the json, parse it, access the array at the index for the latitude and longitude
}
