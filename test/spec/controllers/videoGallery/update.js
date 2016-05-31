'use strict';

describe('Controller: VideoGalleryUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var VideoGalleryUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoGalleryUpdateCtrl = $controller('VideoGalleryUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.videoGallery).toBeDefined();
    expect(scope.fetchYoutubeData).toBeDefined();
    expect(scope.updateVideoGallery).toBeDefined();
  });
});
