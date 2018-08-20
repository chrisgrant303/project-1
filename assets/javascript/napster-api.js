var napsterAPIKEY = "NjIxOWQxNWEtYTE1NC00M2JiLWFkN2YtM2JiNjUwYTVlNmNm";
var apiSecret = 'ODAzNmVhNDEtZmJkMS00MmM1LTlmZDMtZjRiZDJjZjgxOTdi';

var top = (screen.height / 2) - (height / 2);
var left = (screen.width / 2) - (width / 2);
var width = 700;
var height = 400;
var $loginButton = $('#btn-login');
var $loginSection = $('#login-section');

var napsterAPI = 'https://api.napster.com';
var oauthURL = `${napsterAPI}/oauth/authorize?client_id=${napsterAPIKEY}&response_type=code`;

//NEED TO CHANGE URI TO PLACE WE WANT TO REDIRECT THE USER AFTER AUTHENTICATION
var REDIRECT_URI = 'https://developer.napster.com/jsfiddle_proxy';

function fetchUserData(accessToken) {
    return $.ajax({
        url: `${napsterAPI}/v2.1/me`,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }

    });
}

function login() {
    window.addEventListener('message', (event) => {
        var hash = JSON.parse(event.data);
        Napster.member.set({
            accessToken: hash.access_token,
            refreshToken: hash.refresh_token,
        });
        if (hash.type === 'access_token') {
            fetchUserData(hash.access_token)
                .then((data) => {
                    $loginSection.hide();
                });
        }
    }, false);

    window.open(
        `${oauthURL}&redirect_uri=${REDIRECT_URI}`,
        'Napster',
        `menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=${width},height=${height},top=${top}, left=${left}`
    );
}

$loginButton.click(() => {
    login();
})


// PLAYLIST STUFF

var playlistParameter = "pp.201973601"
var napsterplaylistURL = "http://api.napster.com/v2.2/playlists/" + playlistParameter + "/tracks?apikey=" + napsterAPIKEY + "&limit=20";

$.ajax({
    url: napsterplaylistURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
        var track1 = response.tracks[0].id;
        console.log(track1)
        Napster.player.on('ready', function (e) {
            Napster.player.auth();
        });

        Napster.player.play(track1);
    });

