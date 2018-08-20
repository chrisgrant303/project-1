// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube player after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            controls: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


var playlistID = "PLMC9KNkIncKtsacKpgMb0CVq43W80FKvo"
window.onload = function () {
    var iframe = $("#ytplayer");
    iframe.attr("src", "https://www.youtube.com/embed?listType=playlist&list=" + playlistID)
};




