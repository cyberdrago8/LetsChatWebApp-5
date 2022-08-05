const firebaseConfig = {
    apiKey: "AIzaSyCH8DtD_eW4m5zGkWAohw3VV4pW1x6iX6w",
    authDomain: "lets-chat-web-app-2-3f58f.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-2-3f58f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-2-3f58f",
    storageBucket: "lets-chat-web-app-2-3f58f.appspot.com",
    messagingSenderId: "288445491314",
    appId: "1:288445491314:web:02d899c505a61da3663aeb"
  };

firebase.initializeApp(firebaseConfig);


function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "chat_room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    row = "<div class='Room_names' id="+Room_names+" onclick='redirectToRoomName(kwitter_page.html)'>#"+Room_names+"</div></hr>";
    //End code
    });});}
    getData();

function logout(){
    onclick="redirectToRoomName(index.html)"
}

function send(){
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}
function getData() {firebase.database().ref("/"+room_name).on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; childData = childSnapshot.val();if(childKey != "purpose"){
    firbase_Message_id = childKey;
    message_data= childData;
    //Start code
    "<div message="+msg+" id="+user_name+"like="+0+"></div>"
    //End code
}});});}
getData();

function updateLike(){
    var like = like + 1;
}
