'use strict';

describe('Service: flickrAlbumIdExtractor', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var flickrAlbumIdExtractor;
  beforeEach(inject(function (_flickrAlbumIdExtractor_) {
    flickrAlbumIdExtractor = _flickrAlbumIdExtractor_;
  }));

  it('should do accessible', function () {
    expect(!!flickrAlbumIdExtractor).toBe(true);
  });

  it('should do extract id correctly', function () {
    expect(flickrAlbumIdExtractor('https://www.flickr.com/photos/144450420@N04/albums/72157671331275752')).toEqual('72157671331275752');
  });

});
