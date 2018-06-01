"use strict";

angular.module('dota2world').controller('TeamDetailsCtrl',
    function TeamDetailsCtrl($scope, $routeParams, teamsData, playersData) {
        $scope.team = {};        
        $scope.players = [];
        
        teamsData.getTeamById($routeParams.id)
            .success(function (team) {
                $scope.team = team;

                teamsData.getPlayersByTeamId(team.id)
                    .success(function(players) {
                        $scope.players = players;
                    });
            });
    }
);