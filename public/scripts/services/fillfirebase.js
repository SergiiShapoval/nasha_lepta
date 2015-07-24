'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.fillFireBase
 * @description
 * # fillFireBase
 * Service in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .service('fillFireBase', function ($firebaseArray) {
    var ref = new Firebase("https://boiling-fire-9518.firebaseio.com");
    var i =1;
    for (var template in appTemplateByUrls){
      console.log(i.toString() + ' ' + template);
      var templ =ref.child(template);

      templ.set(appTemplateByUrls[template]);
    }

  });
