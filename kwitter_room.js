
var firebaseConfig = {
      apiKey: "AIzaSyC91FBXrf6eSQ-oDUQ89udqk-knv9GDXuQ",
      authDomain: "kwitter-16e89.firebaseapp.com",
      databaseURL: "https://kwitter-16e89-default-rtdb.firebaseio.com",
      projectId: "kwitter-16e89",
      storageBucket: "kwitter-16e89.appspot.com",
      messagingSenderId: "241341699620",
      appId: "1:241341699620:web:89d305ba723de1da592ab1",
      measurementId: "G-GNMG23YHKG"
};
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_Room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name - " + room_name);
                  row = "<div class='room_name' id= " + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.getItem("room_name", name);
      window.location = "kwitter_page.html";
}