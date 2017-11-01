'use strict';

describe('Controller: AlbumsCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var AlbumsCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlbumsCreateCtrl = $controller('AlbumsCreateCtrl', {
      $scope: scope
    });
  }));

  it('check first object is setted correctly', function () {
    expect(scope.album).toBeDefined();
    expect(scope.album.id).toEqual("fill-me");
    expect(scope.album.title).toEqual("Заглавие альбома");
    expect(scope.album.cover).toEqual("https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg");
    expect(scope.album.date.getTime()).toBeLessThan(new Date().getTime()+10);
    expect(scope.album.date.getTime()).toBeGreaterThan(new Date("2016-01-01").getTime());
    expect(scope.album.picasaLink).toEqual("https://picasaweb.google.com/data/feed/base/user/111442129617636727768/albumid/6100601476767132305");
  });
  it('check services are set correctly', function () {
    expect(scope.updateAlbum).toBeDefined();
  });
});
