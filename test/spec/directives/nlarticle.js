'use strict';

describe('Directive: nlArticle', function () {

  // load the directive's module
  beforeEach(module('nashaLeptaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nl-article></nl-article>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
