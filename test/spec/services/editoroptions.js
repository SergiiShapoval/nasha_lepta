'use strict';

describe('Service: EditorOptions', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var EditorOptions;
  beforeEach(inject(function (_EditorOptions_) {
    EditorOptions = _EditorOptions_;
  }));

  it('should do something', function () {
    expect(!!EditorOptions).toBe(true);
  });

});
