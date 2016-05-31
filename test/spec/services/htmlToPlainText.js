'use strict';

describe('Service: htmlToPlainText', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var htmlToPlainText;
  beforeEach(inject(function (_htmlToPlainText_) {
    htmlToPlainText = _htmlToPlainText_;
  }));

  it('should do something', function () {
    expect(htmlToPlainText).toBeDefined();
    expect(htmlToPlainText('simple text')).toEqual('simple text');
    expect(htmlToPlainText('<div class="any-class">text inside div</div>')).toContain('text inside div');
    expect(htmlToPlainText('<div class="any-class">2</div><div class="any-class">divs</div>')).toContain(' divs');
    expect(htmlToPlainText('<div class="any-class">2</div><div class="any-class">divs</div>')).toContain('2');
    expect(htmlToPlainText('&nbsp;')).toEqual('');
  });

});
