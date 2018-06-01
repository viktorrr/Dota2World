"use strict";

angular.module('dota2world').factory('playersData',
    function playersData($http) {
        return {
            getPlayerById: function (id) {
                return $http.get("/api/players/" + id);
            },
            getPlayers: function () {
                return $http.get("/api/players");
            }
        }
    });