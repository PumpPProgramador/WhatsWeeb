var firebaseConfig = {
    apiKey: "AIzaSyCe9Y4Idw4JvTI5QUE-mGt2u81mENa0lYE",
    authDomain: "kwitter-f21cf.firebaseapp.com",
    databaseURL: "https://kwitter-f21cf-default-rtdb.firebaseio.com",
    projectId: "kwitter-f21cf",
    storageBucket: "kwitter-f21cf.appspot.com",
    messagingSenderId: "941299034242",
    appId: "1:941299034242:web:466174142437ae387c2c9b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}