
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBJqgd17KOkJrK9a0rthqLYp3uJpagKhGg",
    authDomain: "newitter-7d77d.firebaseapp.com",
    databaseURL: "https://newitter-7d77d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "newitter-7d77d",
    storageBucket: "newitter-7d77d.appspot.com",
    messagingSenderId: "8091704970",
    appId: "1:8091704970:web:6da086373fe966a4d71773",
    measurementId: "G-0CN4SBBJZS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Namaste  " + username + "!";



function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

