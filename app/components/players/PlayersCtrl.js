"use strict";

angular.module('dota2world').controller('PlayersCtrl',
    function PlayersCtrl($scope, playersData) {
        $scope.players = {};

        playersData.getPlayers()
            .success(function (players) {
                $scope.players = players;
            });
    }
);