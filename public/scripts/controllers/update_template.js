'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:UpdateTemplateCtrl
 * @description
 * # UpdateTemplateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('UpdateTemplateCtrl', function ($scope, editorOptions) {
    $scope.editorOptions = editorOptions;
  });
