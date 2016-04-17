'use strict';

describe('Controller: VideoGalleryListCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var VideoGalleryListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoGalleryListCtrl = $controller('VideoGalleryListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.videoGallery).toBeDefined();
  });
});
