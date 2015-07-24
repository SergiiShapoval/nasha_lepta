'use strict';

describe('Service: fillFireBase', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var fillFireBase;
  beforeEach(inject(function (_fillFireBase_) {
    fillFireBase = _fillFireBase_;
  }));

  it('should do something', function () {
    expect(!!fillFireBase).toBe(true);
  });

});
