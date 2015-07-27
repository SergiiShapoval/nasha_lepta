'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:UpdateTemplateCtrl
 * @description
 * # UpdateTemplateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('UpdateTemplateCtrl', function ($scope) {
    $scope.customMenu = [
      ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
      ['font'],
      ['font-size'],
      ['font-color', 'hilite-color'],
      ['remove-format'],
      ['ordered-list', 'unordered-list', 'outdent', 'indent'],
      ['left-justify', 'center-justify', 'right-justify'],
      ['code', 'quote', 'paragragh'],
      ['link', 'image']
    ];
  });
