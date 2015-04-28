(function() {
    "use strict";

    angular.module('dota2world').factory('heroesData',
        function heroesData($http, ParseAPI) {
            var queryName = 'Heroes',
                queryUrl = ParseAPI + queryName + '/';

            return {
                getHeroById: function (id) {
                    return $http.get(queryUrl + id)
                        .success(function (data) {
                            return data;
                        })
                        .error(function (data) {
                            console.warn('--- Could not get hero data ---');
                            console.warn(data);
                        });
                },
                getHeroes: function () {
                    return $http.get(queryUrl)
                        .success(function (data) {
                            return data;
                        })
                        .error(function (data) {
                            console.warn('------ Could not get heroes data -------');
                            console.warn(data);
                        });
                }
            }
        });
})();
