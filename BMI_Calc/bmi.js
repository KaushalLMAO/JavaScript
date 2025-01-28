let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");
let button = document.getElementById("submit");
button.addEventListener("click", function () {
  let bmi = (
    weight.value /
    ((height.value / 100) * (height.value / 100))
  ).toFixed(2);
  if (bmi < 16) {
    result.textContent = `your BMI is ${bmi} and you are severely underweight`;
  } else if (bmi >= 16 && bmi < 18.4) {
    result.textContent = `your BMI is ${bmi} and you are  underweight`;
  } else {
    result.textContent = `your BMI is ${bmi}`;
  }
});
