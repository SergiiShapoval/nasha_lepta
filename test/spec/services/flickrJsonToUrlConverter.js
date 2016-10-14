'use strict';

describe('Service: flickrJsonToUrlConverter', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var flickrJsonToUrlConverter, flickrJson;



  beforeEach(inject(function (_flickrJsonToUrlConverter_) {
    flickrJsonToUrlConverter = _flickrJsonToUrlConverter_;
    flickrJson = readJSON('test/mock/flickr.json');
  }));

  it('should check if service availeble', function () {
    expect(!!flickrJsonToUrlConverter).toBe(true);
  });

  it('should convert json correctly', function () {
    expect(flickrJsonToUrlConverter(flickrJson)[0].thumb).toEqual("https://farm9.staticflickr.com/8851/28259548663_11a075c77f_z.jpg");
  });

});
