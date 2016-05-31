'use strict';

describe('Directive: nlRandomAlbum', function () {

  // load the directive's module
  beforeEach(module('nashaLeptaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nl-random-album></nl-random-album>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
