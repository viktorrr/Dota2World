(function() {
    "use strict";

    angular.module('dota2world').controller('HomeCtrl',
        function HomeCtrl($scope, articlesData, teamsData, liveStreamsData, upcomingMatchesData) {
            $("body").tooltip({ selector: '[data-toggle=tooltip]' });

            $scope.pageHeading = 'Dota 2 World';

            $scope.news = {};
            $scope.upcomingMatches = {};
            $scope.liveStreams = {};

            $scope.whiteBackground = {
                backgroundColor : 'white'
            };

            $scope.fixedFlagSize = {
                width: '25px',
                height: '15px'
            };

            articlesData.getArticles()
                .then(function(data) {
                    $scope.news = data.data.results;
                }
            );

            liveStreamsData.getStreams()
                .then(function (streams) {
                    $scope.liveStreams = streams.data.streams;
                });

            upcomingMatchesData.getUpcomingMatches()
                .then(function (matches) {
                    teamsData.getTeams()
                        .then(function (teams) {
                            var result = [],
                                teamsCollection = teams.data.results;

                            //TODO:Move this logic to the database requst

                            matches.data.results.forEach(function (team) {
                                var firstTeam = _.find(teamsCollection,
                                        {objectId: team.firstTeam.objectId}),

                                    secondTeam = _.find(teamsCollection,
                                        {objectId: team.secondTeam.objectId}),

                                    obj = {
                                        date : new Date(team.date.iso),
                                        firstTeam : firstTeam,
                                        secondTeam : secondTeam
                                    };
                                result.push(obj);
                            });

                            $scope.upcomingMatches = result;
                        });
                });
        }
    );
})();
