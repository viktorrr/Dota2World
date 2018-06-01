(function() {
    "use strict";

    angular.module('dota2world').controller('HomeCtrl',
        function HomeCtrl($scope, articlesData, teamsData, upcomingMatchesData) {
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
                .success(function(news) {
                    $scope.news = news;
                }
            );

            upcomingMatchesData.getUpcomingMatches()
                .success(function (matches) {
                    teamsData.getTeams()
                        .success(function (teams) {
                            var teamsMap = _.indexBy(teams, 'id');
                            $scope.upcomingMatches = _.map(matches, function(match) {
                                return {
                                    date: match.date,
                                    firstTeam: teamsMap[match.firstTeam],
                                    secondTeam: teamsMap[match.secondTeam]
                              }});;
                        });
                });
        }
    );
})();
