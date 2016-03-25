'use strict';

/**
 * @ngdoc overview
 * @name nashaLeptaApp
 * @description
 * # nashaLeptaApp
 *
 * Main module of the application.
 */
angular
  .module('nashaLeptaApp', [
    'ngResource',
    'ngRoute',
    'firebase',
    'ngCkeditor',
    'angularPicasa',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'ngSocial',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    for (var template in appRootRoutes.views){
      $routeProvider
        .when(
        '/' + appRootRoutes.views[template].url, {
          template: '<nl-article data="'+appRootRoutes.views[template].url+'" auth="auth"></nl-article>'
        }
      );
    }
    $routeProvider
      .when('/', {
        redirectTo: '/news2016'
      })
      .when('/contacts', {
          templateUrl: 'templates/directives/contacts.html'
      })
      .when('/articles', {
      //  TODO
      })
      .when('/articles/:id', {
        //TODO
      })
      .when('/articles/:id/edit', {
      //  TODO
      })
      .when('/articles/new', {
      //  TODO
      })
      .otherwise({
        redirectTo: '/'
      });

  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  })
  .config(function (LightboxProvider) {
    LightboxProvider.getImageUrl = function (imageUrl) {
      console.log('typeof imageUrl === String' + (typeof imageUrl === 'string'));
      if(typeof imageUrl === 'string'){
        return imageUrl;
      }
      console.log(imageUrl);
      return imageUrl.url;
    };
    LightboxProvider.templateUrl = 'templates/vendor/lightbox/pop-up-template.html';
  });
