
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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Hola " + user_name;
function addRoom(){
      Room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"añadiendo sala"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("room name: "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;      
//Final del código
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
