"use strict";

angular.module('dota2world').controller('TeamsCtrl',
    function TeamsCtrl($scope, $routeParams, teamsData) {
        $scope.teams = {};

        $scope.maxImageSize = {
            width : '100%',
            height : '100%'
        };

        teamsData.getTeams()
            .success(function (teams) {
                $scope.teams = teams;
            });
    }
);