'use strict';

describe('Controller: ModalInstanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var ModalInstanceCtrl,
    scope,
    videoFixture = {
      youtubeId: 'Mwee70dr0V4',
      publishedAt:'2016-03-11T19:22:07.000Z',
      title:'grunt bower yo install',
      thumbnailUrl:'https://i.ytimg.com/vi/Mwee70dr0V4/hqdefault.jpg'
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      ModalInstanceCtrl = $controller('ModalInstanceCtrl', {
      $scope: scope,
      video : videoFixture
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.video).toBeDefined();
    expect(scope.video).toEqual(videoFixture);
    expect(scope.playerVars).toBeDefined();
  });
});
