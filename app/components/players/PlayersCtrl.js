"use strict";

angular.module('dota2world').controller('PlayersCtrl',
    function PlayersCtrl($scope, $routeParams, playersData) {
        $scope.players = {};

        playersData.getPlayers()
            .then(function (players) {
                $scope.players = players.data.results;
            });
    }
);