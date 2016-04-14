'use strict';

describe('Directive: popUp', function () {

  // load the directive's module
  beforeEach(module('nashaLeptaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pop-up></pop-up>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
