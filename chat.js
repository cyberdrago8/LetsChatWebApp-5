// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0C_8BnIshHxyfu06NiGmpnB0k70okZaM",
    authDomain: "lets-chat-web-app-95b4a.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-95b4a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-95b4a",
    storageBucket: "lets-chat-web-app-95b4a.appspot.com",
    messagingSenderId: "416824724600",
    appId: "1:416824724600:web:4e48fa7d9079a54a84718d"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



