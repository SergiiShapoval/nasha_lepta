'use strict';

describe('Directive: nlRandomGallery', function () {

  // load the directive's module
  beforeEach(module('nashaLeptaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nl-random-gallery></nl-random-gallery>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
