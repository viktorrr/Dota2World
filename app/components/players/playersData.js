"use strict";

angular.module('dota2world').factory('playersData',
    function playersData($http, ParseRequestHeaders, ParseAPI) {
        return {
            getPlayerById: function (id) {
                var queryName = 'Players';
                return $http.get(ParseAPI + queryName + '/' + id, {headers: ParseRequestHeaders })
                    .success(function (data) {
                        //console.log(data);
                        return data;
                    })
                    .error(function (data) {
                        console.warn('--- ERROR ---');
                        console.warn(data);
                    });
            },
            getPlayers: function () {
                var queryName = 'Players',
                    req = {
                        method: 'GET',
                        url: ParseAPI + queryName,
                        headers: ParseRequestHeaders
                    };
                return $http(req)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        console.warn('------ DATA -------');
                        console.warn(data);
                    });
            }
        }
    });