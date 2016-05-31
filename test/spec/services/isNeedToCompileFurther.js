'use strict';

describe('Factory: IsNeedToCompileFurther', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var IsNeedToCompileFurther;
  beforeEach(inject(function (_IsNeedToCompileFurther_) {
    IsNeedToCompileFurther = _IsNeedToCompileFurther_;
  }));

  it('should do something', function () {
    expect(!!IsNeedToCompileFurther).toBe(true);
    expect(IsNeedToCompileFurther(' picasa=  ')).toBe(true);
    expect(IsNeedToCompileFurther(' ng-  ')).toBe(true);
    expect(IsNeedToCompileFurther(' pop-up  ')).toBe(true);
  });

});
