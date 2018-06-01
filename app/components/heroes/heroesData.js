(function() {
    "use strict";

    angular.module('dota2world').factory('heroesData',
        function heroesData($http) {
            return {
                getHeroById: function (id) {
                    return $http.get("/api/heroes/" + id);
                },
                getHeroes: function () {
                    return $http.get("/api/heroes/");
                }
            }
        });
})();
