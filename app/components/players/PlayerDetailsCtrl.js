"use strict";

angular.module('dota2world').controller('PlayerDetailsCtrl',
    function PlayerDetailsCtrl($scope, $routeParams, teamsData, playersData) {
        $scope.player = {};

        playersData.getPlayerById($routeParams.id)
            .then(function (player) {
                $scope.player = player.data;

                teamsData.getTeamById($scope.player.teamId.objectId)
                    .then(function (team) {
                        $scope.player.team = team.data;
                    });
            })
            .then(function () {
                teamsData.getTeamRole($scope.player.positionId.objectId)
                    .then(function (position) {
                        $scope.player.position = position.data;
                    });
            });

        $scope.activePage = $scope.player.nickname;
    }
);