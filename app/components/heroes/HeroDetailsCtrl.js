(function() {
    "use strict";

    angular.module('dota2world').controller('HeroDetailsCtrl',
        function HeroDetailsCtrl($scope, $routeParams, heroesData) {

            $scope.hero = {};

            heroesData.getHeroById($routeParams.id)
                .then(function (hero) {
                    $scope.hero = hero.data;
                });

            $scope.baseStatsShown = false;
            $scope.baseStatsShowText = 'Show';

            $scope.skillsShown = false;
            $scope.shkillsShowText = 'Show';

            $scope.showAndHideAbilities = showAndHideAbilities;


            $scope.loreShown = false;
            $scope.loreShowText = 'Show';

            $scope.showAndHideLore = showAndHideLore;

            function showAndHideAbilities() {
                if ($scope.skillsShown === true) {
                    $scope.skillsShown = false;
                    $scope.shkillsShowText = 'Hide';

                } else {
                    $scope.skillsShown = true;
                    $scope.shkillsShowText = 'Show';
                }
            }

            function showAndHideLore() {
                if ($scope.loreShown === true) {
                    $scope.loreShown = false;
                    $scope.loreShowText = 'Hide';

                } else {
                    $scope.loreShown = true;
                    $scope.loreShowText = 'Show';
                }
            }

            $scope.maxImageSize = {
                width: "100%",
                height : "100%"
            };
        }
    );
})();
