(function() {
    "use strict";

    angular.module('dota2world').controller('HeroesCtrl',
        function HeroesCtrl($scope, $location, heroesData) {
            $scope.heroes = [];

            $scope.selectedHero = { };

            heroesData.getHeroes()
                .then(function (heroes) {
                    $scope.heroes = heroes.data.results;
                });

            $scope.searchInputStyle = {
                width : '80%'
            };

            $scope.$watch(function() { return $scope.selectedHero },
                function(newValue) {
                    if (newValue.title) {
                        $scope.heroes.forEach(function (hero) {
                            if (hero.name === newValue.title) {
                                $location.path('/heroes/' +     hero.objectId)
                            }
                        })
                    }
                }
            );
        }
    );
})();
