(function() {
    "use strict";

    angular.module('dota2world').factory('upcomingMatchesData',
        function ($http) {
            return {
                getUpcomingMatches: function () {
                    return $http.get('/api/matches');
                }
            }
        });
})();
