'use strict';

describe('Service: GroupQtyResizer', function () {
  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var GroupQtyResizer;
  beforeEach(inject(function (_GroupQtyResizer_) {
    GroupQtyResizer = _GroupQtyResizer_;
  }));

  it('should do something', function () {
    expect(!!GroupQtyResizer).toBe(true);
    expect(GroupQtyResizer.getQty(900)).toBe(3);
    expect(GroupQtyResizer.getQty(750)).toBe(2);
    expect(GroupQtyResizer.getQty(420)).toBe(1);
  });

});
