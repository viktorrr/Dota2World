"use strict";

angular.module('dota2world').factory('playersData',
    function playersData($http, ParseAPI) {
        var queryName = 'Players',
            queryUrl = ParseAPI + queryName + '/';
        return {
            getPlayerById: function (id) {
                return $http.get(queryUrl + id)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        console.warn('--- Could not get player data ---');
                        console.warn(data);
                    });
            },
            getPlayers: function () {
                return $http.get(queryUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        console.warn('------ Could not get players data -------');
                        console.warn(data);
                    });
            }
        }
    });