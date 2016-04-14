'use strict';

describe('Service: PlaylistFetcher', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  //beforeEach(angular.mock.http.init);
  //afterEach(angular.mock.http.reset);

  var $httpBackend, youtubeListResponseJson, fetchResult;

  // instantiate service
  var PlaylistFetcher;
  beforeEach(inject(function (_PlaylistFetcher_, _$httpBackend_) {
    PlaylistFetcher = _PlaylistFetcher_;
    $httpBackend=_$httpBackend_;

    youtubeListResponseJson = readJSON('test/mock/youtube.json');
    // Note that this HTTP backend is ngMockE2E's, and will make a real HTTP request
    $httpBackend.whenGET(/.*?/g)
      .respond(youtubeListResponseJson);




  }));

  beforeEach(function(done){

    PlaylistFetcher('PL2qtZEYrb0pKR37JpFr13SRqGoicpHEIT')
      .then(
        function(result){
          fetchResult = result;
          done();
        }, function(){
          console.log('error in callback');
          done();
        });

  });

  xit('PlaylistFetcher should be defined', function () {
    expect(!!PlaylistFetcher).toBe(true);
    expect(PlaylistFetcher('23')).toBeDefined();
  });

  it('PlaylistFetcher should return correct data', function () {
    expect(fetchResult).toBeDefined();
    expect(fetchResult[0]).toBeDefined();
    expect(fetchResult[0].youtubeId).toEqual('Mwee70dr0V4');
    expect(fetchResult[0].publishedAt).toEqual('2016-03-11T19:22:07.000Z');
    expect(fetchResult[0].title).toEqual('grunt bower yo install');
    expect(fetchResult[0].thumbnailUrl).toEqual('https://i.ytimg.com/vi/Mwee70dr0V4/hqdefault.jpg');
  });

});
