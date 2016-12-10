'use strict';

(function(module) {
  webDB.execute(
    'SELECT state FROM zips;',
    function(rows){
      console.log(rows);
      if (rows.length){
        rows.forEach(function(a){
          $('#state-select').append('<option>' + a.state + '</option>');
        });
        // we arent inserting into a template, so just adding options?
      }
    }
  );
  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
})(window);
