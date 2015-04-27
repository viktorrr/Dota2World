"use strict";

angular.module('dota2world').factory('teamsData',
    function ($http, ParseRequestHeaders, ParseAPI) {
        return {
            getTeamById: function (id) {
                var queryName = 'Teams',
                    queryUrl = ParseAPI + queryName + '/' + id,
                    queryConfig = {
                        headers: ParseRequestHeaders
                    };

                return $http.get(queryUrl, queryConfig)
                    .success(function (data) {
                        return data;
                    });
            },
            getTeams: function () {
                var queryName = 'Teams',
                    req = {
                        method: 'GET',
                        url: ParseAPI + queryName,
                        headers: ParseRequestHeaders
                    };

                return $http(req)
                    .success(function (data) {
                        return data.results;
                    })
                    .error(function (data) {
                        console.warn('------ DATA -------');
                        console.warn(data);
                    });
            },
            getTeamRole: function (id) {
                var queryName = 'TeamRoles',
                    queryUrl = ParseAPI + queryName + '/' + id,
                    queryConfig = {
                        headers: ParseRequestHeaders
                    };

                return $http.get(queryUrl, queryConfig)
                    .success(function (data) {
                        return data;
                    });
            }
        }
    });