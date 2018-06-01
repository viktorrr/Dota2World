(function() {
    "use strict";

    angular.module('dota2world').factory('articlesData',
        function articlesData($http) {
            return {
                getArticlesById: function (id) {
                    return $http.get('api/articles/' + id);
                },
                getArticles: function (successCallback) {  
                    return $http.get('api/articles/');
                }
            }
        });
})();
