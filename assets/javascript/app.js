// Firebase & User Authentication Initialization
var database = firebase.database();

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
});
// End Firebase Initialization