(function() {
    'use strict';

    angular.module('underscore', [])
        .factory('_', function() {
            return window._;
        });

    angular.module('dota2world', ['ngRoute', 'angucomplete', 'underscore'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/home/home.html'
                })
                .when('/heroes', {
                    templateUrl : 'app/components/heroes/heroes.html'
                })
                .when('/heroes/:id', {
                    templateUrl : 'app/components/heroes/hero-details.html'
                })
                .when('/articles/:id', {
                    templateUrl : 'app/components/articles/articles.html'
                })
                .when('/teams', {
                    templateUrl : 'app/components/teams/teams.html'
                })
                .when('/teams/:id', {
                    templateUrl : 'app/components/teams/team-details.html'
                })
                .when('/players/', {
                    templateUrl : 'app/components/players/players.html'
                })
                .when('/players/:id', {
                    templateUrl : 'app/components/players/player-details.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
        .constant('ParseRequestHeaders', {
            'X-Parse-Application-Id': 'y400TwaOG7VGAc5XulW1NrGOj6HwjEFhDAJAhtw1',
            "X-Parse-REST-API-Key": 'LSors67l3LYxe5pfQLQVQ5cZmGgCwThuMprtP608'
        })
        .constant('ParseAPI', 'https://api.parse.com/1/classes/');
})();
