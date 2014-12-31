'use strict';

/**
 * @ngdoc filter
 * @name maApp.filter:num2text
 * @function
 * @description
 * # num2text
 * Filter in the maApp.
 */
angular.module('maApp')
    .filter('num2text', function() {
        return function(input) {
            var result = '';
            switch (input) {
                case 0:
                    result = 'male';
                    break;
                case 1:
                    result = 'female';
                    break;
                default:
                    result = 'unknown';
            }
            return result;
        };
    });