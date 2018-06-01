"use strict";

angular.module('dota2world').controller('PlayerDetailsCtrl',
    function PlayerDetailsCtrl($scope, $routeParams, teamsData, playersData) {
        $scope.player = {};

        playersData.getPlayerById($routeParams.id)
            .success(function (player) {
                $scope.player = player;

                teamsData.getTeamById(player.teamId)
                    .success(function (team) {
                        $scope.player.team = team;
                    });
            });

        $scope.activePage = $scope.player.nickname;
    }
);