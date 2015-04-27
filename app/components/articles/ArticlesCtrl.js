(function() {
    "use strict";

    angular.module('dota2world').controller('ArticlesCtrl',
        function ArticlesCtrl($scope, $routeParams, articlesData) {
            $scope.article = {};

            $scope.searchResults = {};

            articlesData.getArticlesById($routeParams.id)
                .then(function(article) {
                    $scope.article = article.data;
                });

            //articlesData.getArticles()
            //    .then(function (articles) {
            //        $scope.searchResults = articles.data.results;
            //    });
        }
    );
})();
