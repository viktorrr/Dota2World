(function() {
    "use strict";

    angular.module('dota2world').factory('liveStreamsData',
        function ($http) {
            return {
                getStreams: function () {
                    var url = 'https://jsonp.afeld.me/?url=https://api.twitch.tv/kraken/search/streams?q=dota%202&callback=JSON_CALLBACK';
                    return $http.jsonp(url);
                }
            }
        });
})();
