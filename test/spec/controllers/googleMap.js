'use strict';

describe('Controller: GoogleMapCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var GoogleMapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoogleMapCtrl = $controller('GoogleMapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.map).toBeDefined();
    expect(scope.gMapMarkers).toBeDefined();
  });
});
