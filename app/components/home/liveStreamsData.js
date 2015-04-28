(function() {
    "use strict";

    angular.module('dota2world').factory('liveStreamsData',
        function ($http) {
            return {
                getStreams: function () {
                    var twitchAPI = 'https://api.twitch.tv/kraken/search/streams?q=dota%202',
                        requestUrl = 'https://jsonp.afeld.me/?url='+ twitchAPI + '&callback=JSON_CALLBACK';                                       
                    return $http.jsonp(requestUrl);
                }
            }
        });
})();
