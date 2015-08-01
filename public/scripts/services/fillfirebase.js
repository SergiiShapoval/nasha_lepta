'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.fillFireBase
 * @description
 * # fillFireBase
 * Service in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .service('fillFireBase', function ($firebaseArray, FirebaseLink) {
    var ref = new Firebase(FirebaseLink);
    var i =1;
    for (var template in appTemplateByUrls){
      console.log(i.toString() + ' ' + template);
      var templ =ref.child(template);

      templ.set(appTemplateByUrls[template]);
    }

  });
