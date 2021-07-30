
var firebaseConfig = {
      apiKey: "AIzaSyAUcc1h1g6Q9t6ic2vGbb6MO202TkKklFE",
      authDomain: "adv-c94-kwitter-webapp.firebaseapp.com",
      databaseURL: "https://adv-c94-kwitter-webapp-default-rtdb.firebaseio.com",
      projectId: "adv-c94-kwitter-webapp",
      storageBucket: "adv-c94-kwitter-webapp.appspot.com",
      messagingSenderId: "337966689603",
      appId: "1:337966689603:web:3af8c725d6220c605f93f6"
};

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
