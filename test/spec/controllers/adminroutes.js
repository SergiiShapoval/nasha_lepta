'use strict';

describe('Controller: AdminroutesCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var AdminroutesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminroutesCtrl = $controller('AdminroutesCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {

  });
});
