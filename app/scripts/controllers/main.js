'use strict';

/**
 * @ngdoc function
 * @name maApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maApp
 */
angular.module('maApp')
    .controller('MainCtrl', function($scope) {
        //initialize material ui
        iniMD();

        $scope.searchBirth = '2014-12-01';
        
        //dummy data
        $scope.data = [{
            'id': 1,
            'name': 'foo',
            'age': 19,
            'gender': 0,
            'birth': '2000-01-01',
            'user_type': 1,
            'score': 999
        }, {
            'id': 2,
            'name': 'bar',
            'age': 19,
            'gender': 1,
            'birth': '2000-01-01',
            'user_type': 2,
            'score': 999
        }, {
            'id': 3,
            'name': 'baz',
            'age': 19,
            'gender': 1,
            'birth': '2000-01-01',
            'user_type': 3,
            'score': 32
        }, {
            'id': 4,
            'name': 'quz',
            'age': 19,
            'gender': -1,
            'birth': '2000-01-01',
            'user_type': 1,
            'score': 1000
        }];
    });