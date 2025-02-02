// data
const song_data = [
  {
    id: 1,
    song_name: "Blue",
    details: " Yung Kai",
    img_src: "https://i.scdn.co/image/ab67616d0000b273373c63a4666fb7193febc167",
    song_url: "copify/blue.mp3",
  },
];
//booleans
let value = 0;
let notiadd;
let added = false;
//DOM
let noti = document.querySelector(".noti");
let song1 = document.querySelector("#song1");
let name1 = document.querySelector("#song1_name");
let playlist_data = document.querySelector(".lists");
// noti function

noti.addEventListener("click", () => {
  if (notiadd && value > 0) {
    alert(`You added songs to your playlist`);
    value = 0;
    noti.textContent = `N`;
  } else alert("You dont have new notification");
});
// images
let img = document.createElement("img");
img.src = song_data[0].img_src;
img.style.width = "30%";
img.style.height = "100%";
img.style.padding = "5px";
img.style.borderRadius = "10px";
song1.appendChild(img);
// audios
let blue = new Audio("copify / blue.mp3");
// name
let song_name1 = document.createElement("p");
song_name1.textContent = `${song_data[0].song_name}`;

song1.appendChild(song_name1);

// playlist
let playList1 = document.createElement("section");
playList1.id = "playlist1";
playList1.className = "song";
let img_play1 = document.createElement("img");
img_play1.src = song_data[0].img_src;
img_play1.style.width = "30%";
img_play1.style.height = "100%";
img_play1.style.padding = "5px";
img_play1.style.borderRadius = "10px";
playList1.appendChild(img_play1);

let song_name_play1 = document.createElement("p");
song_name_play1.textContent = `${song_data[0].song_name}`;
song_name_play1.style.margin = "10px";
song_name_play1.style.fontSize = "20px";
playList1.appendChild(song_name_play1);

playList1.addEventListener("click", () => {
  alert("Playing song");
  blue.play();
});
// add to playlist
let addToPlay1 = document.createElement("button");
addToPlay1.textContent = "+";
addToPlay1.className = "add";
addToPlay1.style.margin = "50px";
addToPlay1.style.fontSize = "20px";
song1.appendChild(addToPlay1);
addToPlay1.addEventListener("click", () => {
  if (!added) {
    // adds in playlist
    addToPlay1.style.border = "2px solid green";
    addToPlay1.style.color = "green";
    added = true;
    value += 1;
    noti.textContent = `N${value}`;
    notiadd = true;

    playlist_data.appendChild(playList1);
  } else {
    // removes from playlist
    added = true;
    addToPlay1.style.border = "2px solid white";
    addToPlay1.style.color = "white";
    added = false;
    if (value > 0) {
      value -= 1;
    }

    noti.textContent = `N`;
    playList1.remove();
  }
});
