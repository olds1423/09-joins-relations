'use strict';

(function(module) {
  webDB.execute(
    'SELECT DISTINCT state FROM zips ' +
    'ORDER BY state DESC;',
    function(rows){
      console.log(rows);
      if (rows.length){
        rows.forEach(function(a){
          $('#state-select').append('<option>' + a.state + '</option>');
        });
      }
      $('#state-select').on('change', function() {
        console.log($(this).val(), 'state value');
        if ($(this).val()) {
          webDB.execute(
            'SELECT DISTINCT city FROM zips WHERE state="' + $(this).val() + '"' +
            ' ORDER BY city DESC;',
            function(rows){
              if (rows.length){
                rows.filter(function(dataEntry) {
                  return $(this).val() === dataEntry.state;
                })
                .forEach(function(a){
                  $('#city-select').append('<option>' + a.city + '</option>');
                });
              }
            }
          );
        }
      });
    }
  );
  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
})(window);
