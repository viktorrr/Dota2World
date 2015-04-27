loadStreams = function () {
    // TODO: This needs to be as a service, also it shouldn't visualise the data!!!

    var url = 'https://api.twitch.tv/kraken/search/streams?q=dota%202';
    $.corsByPass({
        url: url,
        type: 'GET',
        async: false,
        success: function (result) {
            var text = result.responseText,
                jsonString = text.substring(text.indexOf('{', 1), text.lastIndexOf('}') + 1),
                json = JSON.parse(jsonString),
                size = json.streams.length,
                $liveStreams = $('#live-streams'),
                streamIndex,
                streamUrl,
                streamName,
                streamLanguage,
                streamViewers,
                streamCreateDate,
                imageLocation,
                $tr, $flag, $name, $viewers;

            for (streamIndex = 0; streamIndex < size; streamIndex += 1) {
                streamUrl = json.streams[streamIndex].channel.url;
                streamName = json.streams[streamIndex].channel.display_name;
                streamViewers = json.streams[streamIndex].viewers;
                streamLanguage = json.streams[streamIndex].channel.language;
                streamCreateDate = new Date(json.streams[streamIndex].created_at);
                imageLocation = 'images/flags/' + streamLanguage + '.png';

                $tr = $('<tr>');

                $tr.attr('data-toggle', 'tooltip')
                    .addClass('info')
                    .attr('data-placement', 'left')
                    .attr('pageHeading', 'Online since: ' + streamCreateDate.toLocaleTimeString());

                $flag = $('<td>')
                    .append($('<img>')
                        .attr('src', imageLocation));

                $viewers = $('<td>')
                    .append($('<a>')
                        .attr('href', streamUrl)
                        .text(streamViewers));

                $name = $('<td>')
                    .append($('<a>')
                        .attr('href', streamUrl)
                        .text(streamName));

                $tr.append($flag).append($name).append($viewers);

                $liveStreams.append($tr);
            }

            $liveStreams
                .parent().css('padding', 0)
                .find('img').css('width', '25px').css('height', '15px');

            $('#upcoming-matches')
                .parent().css('padding', 0);

            $("body").tooltip({ selector: '[data-toggle=tooltip]' });
        }
    });
};