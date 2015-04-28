(function() {
    "use strict";

    angular.module('dota2world').factory('articlesData',
        function playersData($http, ParseRequestHeaders, ParseAPI) {
            return {
                getArticlesById: function (id) {
                    var queryName = 'News',
                        queryUrl = ParseAPI + queryName + '/' + id,
                        queryConfig = {
                            headers: ParseRequestHeaders
                        };

                    return $http.get(queryUrl, queryConfig)
                        .success(function (data) {
                            return data;
                        });
                },
                getArticles: function () {
                    var queryName = 'News',
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
