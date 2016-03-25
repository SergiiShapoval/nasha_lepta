'use strict';

describe('Service: FireObjects', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var FireObjects;
  beforeEach(inject(function (_FireObjects_) {
    FireObjects = _FireObjects_;
  }));

  it('should do something', function () {
    expect(!!FireObjects).toBe(true);
  });

});
