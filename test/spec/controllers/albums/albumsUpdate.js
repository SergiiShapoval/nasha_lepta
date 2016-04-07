'use strict';

describe('Controller: AlbumsUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var AlbumsUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlbumsUpdateCtrl = $controller('AlbumsUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.updateAlbum).toBeDefined();
  });
});
