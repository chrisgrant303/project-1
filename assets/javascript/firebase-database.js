$(document).ready()
initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;

            var database = firebase.database();

            database.ref().push({
                userid: [user.uid],
                name: [user.displayName],
                avatar: [user.photoURL],
            });

            database.ref().push({
                SongTitle: [songInput]
                // ^Title is for the song input
            });

            if (photoURL) {
                drawPhoto(photoURL);
            }

            if (displayName) {
                drawDisplayName(displayName);
            }
            user.getIdToken().then(function (accessToken) {
                console.log("signed in");
            });
        } else {
            // User is signed out.
            console.log("signed out");
        }
    }, function (error) {
        console.log(error);
    });
};

window.addEventListener('load', function () {
    initApp();
});

function drawPhoto(photoURL) {
    $('#photoID').attr("src", photoURL);
};

function drawDisplayName(displayName) {
    $('#displayName').text("Welcome, " + displayName);
};

function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }, function (error) {
        // An error happened.
    });
};


// JS Firebase for the input side
$("button").on("click", function () {
    var SongTitle = $("#songInput").val();
    console.log(SongTitle);

    $("#songInput").val("");

    $("table").append(`<tr>
        <td>${SongTitle}</td>
        </tr>`);

});