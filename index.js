const data = document.getElementById("number");
const div = document.getElementById("output");
const btn = document.getElementById("convert-btn");
btn.addEventListener("click", () => {
  if (data.value.trim() === "") {
    div.innerText = "Please enter a valid number";
    return;
  } else if (data.value <= -1) {
    div.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (data.value >= 4000) {
    div.textContent = " Please enter a number less than or equal to 3999";
    return;
  }

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  for (let i = 0; i < values.length; i++) {
    while (data.value >= values[i]) {
      data.value = data.value - values[i];
      result += symbols[i];
    }
  }
  div.textContent = result;
});
