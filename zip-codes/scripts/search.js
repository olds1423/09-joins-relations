'use strict';

// var starterMap = {lat: 47.611633, lng: -122.305608};
// initMap(starterMap);

(function(module) {

  // var initStarterMap = function() {
  //   webDB.execute(
  //     'SELECT latitude, longitude FROM zips WHERE rowid="28847"',
  //     function(rows) {
  //       if(rows.length) {
  //         var seaLat = rows.latitude;
  //         var seaLong = rows.longitude;
  //         var starterMap = {lat: seaLat, lng: seaLong}; //sets initial map center over Seattle
  //         initMap(starterMap);
  //       }
  //     }
  //   );
  // };
  var stateSelector = function() {
    webDB.execute(
      'SELECT DISTINCT state FROM zips ' +
      'ORDER BY state DESC;',
      function(states) {
        if (states.length) {
          states.forEach(function(a) {
            $('#state-select').append('<option value="' + a.state + '">' + a.state + '</option>');
          });
        }
      });
  }; //end stateSelector

  var citySelector = function() {
    $('#state-select').on('change', function() {
      $('#city-select option').first().siblings().remove(); //clears all but 'select a city' option from city filter every time a new state is selected, so cities from different states don't appear in city filter at the same time.
      if ($(this).val()) { //$(this).val() = state selected
        webDB.execute(
            'SELECT DISTINCT city FROM zips WHERE state="' + $(this).val() + '" ' +
            'ORDER BY city DESC;',
            function(cities) {
              if (cities.length) {
                cities.forEach(function(a) {
                  $('#city-select').append('<option value="' + a.city + '">' + a.city + '</option>'); //good practice to set option value attribute = to option content
                });
              }
            }
          );
      }
    });
  }; //end citySelector

  var cityChange = function() {
    $('#city-select').on('change', function() {
      if ($(this).val()) { //$(this).val() = city selected
        webDB.execute(
          'SELECT latitude, longitude, state, city ' +
          'FROM zips ' +
          'WHERE state="' + $('#state-select').val() + '" AND ' +
          'city="' + $(this).val() + '";', //returns an array of objects with specified properties (state, city, latitude, and longitude) and their corresponding values
          function(rows) {
            if (rows.length) {
              rows.forEach(function(currRow) {
                if (currRow.state === $('#state-select').val()) {
                  var latitude = currRow.latitude;
                  var longitude = currRow.longitude;
                  var newMap = {lat: latitude, lng: longitude};
                  initMap(newMap);
                }
              });
            }
          });
      };
    });
  };

      // TODO: Write the code to populate your filters, and enable the search queries here in search.js
      // TODO: You will also interact with the map.js file here
      // map = new google.maps.Map(document.getElementById("map"), {...});



      // Wire up the zip code search to pull data from the DB and log matching objects to the console (while debugging).
      //   - You will need to write your SQL queries for a direct search of the db using the zip.
      //   - You have the `webDB.execute()` method from the blog available to you for accessing the DB table for this assignment.

  // initStarterMap();
  stateSelector();
  citySelector();
  cityChange();
})(window);
