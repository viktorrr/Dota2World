"use strict";

angular.module('dota2world').controller('TeamDetailsCtrl',
    function TeamDetailsCtrl($scope, $routeParams, teamsData, playersData) {
        $scope.team = {};
        
        $scope.players = [];
        
        teamsData.getTeamById($routeParams.id)
            .then(function (team) {
                $scope.team = team.data;
            })
            //TODO: make this a db request!
            .then(function () {
                $scope.players = playersData.getPlayers()
                    .then(function (players) {
                        var playersInTeam = [];
                        _.each(players.data.results, function (p) {
                            if (p.teamId.objectId === $scope.team.objectId) {
                                playersInTeam.push(p)
                            }
                        });
                        $scope.players = playersInTeam;
                    });
            });
    }
);