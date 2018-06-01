"use strict";

angular.module('dota2world').factory('teamsData',
    function ($http, ParseAPI) {
        return {
            getTeamById: function (id) { 
                return $http.get('/api/teams/' + id);
            },
            getTeams: function () {
                return $http.get('/api/teams/');
            },
            getPlayersByTeamId: function (id) {
                return $http.get('/api/teams/' + id + '/players');
            }
        }
    });