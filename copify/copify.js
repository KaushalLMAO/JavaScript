// data
const song_data = [
  {
    id: 1,
    song_name: "Blue",
    img_src: "https://i.scdn.co/image/ab67616d0000b273373c63a4666fb7193febc167",
  },
];
//DOM
let noti = document.querySelector(".noti");
let song1 = document.querySelector("#song1");
let name1 = document.querySelector("#song1_name");
// noti function

noti.addEventListener("click", () => {
  alert("You dont have new notification");
});
// images
let img = document.createElement("img");
img.src = song_data[0].img_src;
img.style.width = "30%";
img.style.height = "100%";
img.style.padding = "5px";
img.style.borderRadius = "10px";
song1.appendChild(img);

// name
let song_name1 = document.createElement("p");
song_name1.textContent = song_data[0].song_name;
song1.appendChild(song_name1);
