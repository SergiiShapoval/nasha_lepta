'use strict';

describe('Factory: ModelCopier', function () {

  // load the factory's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var ModelCopier;
  beforeEach(inject(function (_ModelCopier_) {
    ModelCopier = _ModelCopier_;
  }));

  it('should do something', function () {
    expect(!!ModelCopier).toBe(true);


  });

});
