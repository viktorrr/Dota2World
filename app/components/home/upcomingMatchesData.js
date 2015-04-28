(function() {
    "use strict";

    angular.module('dota2world').factory('upcomingMatchesData',
        function ($http, ParseAPI) {
            var queryName = 'UpcomingMatches',
                queryUrl = ParseAPI + queryName;
            return {
                getUpcomingMatches: function () {
                    return $http.get(queryUrl)
                        .success(function (matches) {
                            return matches.results;
                        })
                        .error(function (data) {
                            console.warn('------ Could not get upcoming matches -------');
                            console.warn(data);
                        });
                }
            }
        });
})();
