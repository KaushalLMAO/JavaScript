let color1 = document.getElementById("1");
let color2 = document.getElementById("2");
let color3 = document.getElementById("3");
let color4 = document.getElementById("4");
alert("This is for pc or laptop only");

let colordatas = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
color1.innerHTML = "Space to change colors";
color2.innerHTML = "Space to change colors";
color3.innerHTML = "Space to change colors";
color4.innerHTML = "Space to change colors";
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    color1.innerHTML = "";
    color2.innerHTML = "";
    color3.innerHTML = "";
    color4.innerHTML = "";
    let color_arr_1 = ["#"];
    let color_arr_2 = ["#"];
    let color_arr_3 = ["#"];
    let color_arr_4 = ["#"];

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * colordatas.length);
      color_arr_1.push(colordatas[random]);
    }

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * colordatas.length);
      color_arr_4.push(colordatas[random]);
    }

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * colordatas.length);
      color_arr_3.push(colordatas[random]);
    }

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * colordatas.length);
      color_arr_2.push(colordatas[random]);
    }

    for (const char of color_arr_1) {
      color1.innerHTML += char;
    }
    for (const char of color_arr_2) {
      color2.innerHTML += char;
    }
    for (const char of color_arr_3) {
      color3.innerHTML += char;
    }
    for (const char of color_arr_4) {
      color4.innerHTML += char;
    }

    color1.style.backgroundColor = color_arr_1.join("");
    color2.style.backgroundColor = color_arr_2.join("");
    color3.style.backgroundColor = color_arr_3.join("");
    color4.style.backgroundColor = color_arr_4.join("");
  }
});
