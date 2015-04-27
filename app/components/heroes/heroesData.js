(function() {
    "use strict";

    angular.module('dota2world').factory('heroesData',
        function heroesData($http, ParseRequestHeaders, ParseAPI) {
            return {
                getHeroById: function (id) {
                    var queryName = 'Heroes';
                    return $http.get(ParseAPI + queryName + '/' + id, {headers: ParseRequestHeaders })
                        .success(function (data) {
                            //console.log(data);
                            return data;
                        })
                        .error(function (data) {
                            console.warn('--- ERROR ---');
                            console.warn(data);
                        });
                },
                getHeroes: function () {
                    var queryName = 'Heroes',
                        req = {
                            method: 'GET',
                            url: ParseAPI + queryName,
                            headers: ParseRequestHeaders
                        };
                    return $http(req)
                        .success(function (data) {
                            return data;
                        })
                        .error(function (data) {
                            console.warn('------ DATA -------');
                            console.warn(data);
                        });
                }
            }
        });
})();
