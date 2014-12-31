'use strict';

/**
 * @ngdoc function
 * @name maApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the maApp
 */
angular.module('maApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
