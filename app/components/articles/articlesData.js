(function() {
    "use strict";

    angular.module('dota2world').factory('articlesData',
        function playersData($http, ParseAPI) {
            var queryName = 'News',
                queryUrl = ParseAPI + queryName + '/';

            return {
                getArticlesById: function (id) {
                    return $http.get(queryUrl + id)
                        .success(function (data) {
                            return data;
                        })
                        .error(function(data) {
                            console.warn('------ Could not get article data -------');
                            console.warn(data);
                        });
                },
                getArticles: function () {  
                    return $http.get(queryUrl)
                        .success(function (data) {
                            return data;
                        })
                        .error(function (data) {
                            console.warn('------ Could not get articles data -------');
                            console.warn(data);
                        });
                }
            }
        });
})();
