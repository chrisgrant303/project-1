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

            database.ref().on("value", function (snapshot) {
                console.log(snapshot.val());
            });

            database.ref().push({
                userid: [user.uid],
                name: [user.displayName],
                avatar: [user.photoURL]
            });
        }
    }, function (error) {});
};

window.addEventListener('load', function () {
    initApp()
});