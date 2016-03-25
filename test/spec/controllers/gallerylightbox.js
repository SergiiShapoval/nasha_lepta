'use strict';

describe('Controller: GallerylightboxCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var GallerylightboxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GallerylightboxCtrl = $controller('GallerylightboxCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
  });
});
