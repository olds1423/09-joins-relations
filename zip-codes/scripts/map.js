'use strict';

function initMap(newMap) {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: newMap,
    scrollwheel: true,
    zoom: 8
  });

  var marker = new google.maps.Marker({
    position: newMap,
    map: map
  });
};

// TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
