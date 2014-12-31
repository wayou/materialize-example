'use strict';

/**
 * @ngdoc overview
 * @name maApp
 * @description
 * # maApp
 *
 * Main module of the application.
 */
angular
    .module('maApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function() {

    });

function iniMD() {
    Waves.displayEffect();
    $('.dropdown-button').dropdown({
        'hover': false
    });
    $('ul.tabs').tabs();
    $('.tab-demo').show().tabs();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({
        'delay': 45
    });
    $('.collapsible-accordion').collapsible();
    $('.collapsible-expandable').collapsible({
        'accordion': false
    });
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav();
    $('.datepicker').pickadate();
    $('select').material_select();
}