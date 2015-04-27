(function() {
    "use strict";

    angular.module('dota2world').factory('upcomingMatchesData',
        function (_, $http, teamsData, ParseRequestHeaders, ParseAPI) {
            return {
                getUpcomingMatches: function () {
                    var queryName = 'UpcomingMatches',
                        req = {
                            method: 'GET',
                            url: ParseAPI + queryName,
                            headers: ParseRequestHeaders
                        };

                    return $http(req).success(function (matches) {
                        return matches.results;
                    })
                        .error(function (data, status, headers) {
                            console.warn('------ DATA -------');
                            console.warn(data);

                            console.warn();

                            console.warn('------ STATUS -------');
                            console.warn(status);

                            console.warn('------ HEADERS -------');
                            console.warn(headers);
                        });
                }
            }
        });
})();
