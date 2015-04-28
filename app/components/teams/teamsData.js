"use strict";

angular.module('dota2world').factory('teamsData',
    function ($http, ParseAPI) {
            var queryName = 'Teams',
                queryUrl = ParseAPI + queryName + '/';

        return {
            getTeamById: function (id) { 
                return $http.get(queryUrl + id)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data){
                        console.warn('------ Could not get team data -------');
                        console.warn(data);
                    });
            },
            getTeams: function () {
                return $http.get(queryUrl)
                    .success(function (data) {
                        return data.results;
                    })
                    .error(function (data) {
                        console.warn('------ Could not get teams data -------');
                        console.warn(data);
                    });
            },
            getTeamRole: function (id) {
                var queryName = 'TeamRoles',
                    queryUrl = ParseAPI + queryName + '/' + id;

                return $http.get(queryUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        console.warn('------ Could not get team roles data -------');
                        console.warn(data);
                    });;
            }
        }
    });