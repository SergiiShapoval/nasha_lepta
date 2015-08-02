'use strict';

describe('Service: FirebaseLink', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var FirebaseLink;
  beforeEach(inject(function (_FirebaseLink_) {
    FirebaseLink = _FirebaseLink_;
  }));

  it('should do something', function () {
    expect(!!FirebaseLink).toBe(true);
  });

});
