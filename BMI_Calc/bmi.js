let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");
let button = document.getElementById("submit");
let color = document.querySelector(".color");
button.addEventListener("click", function () {
  let bmi = (
    weight.value /
    ((height.value / 100) * (height.value / 100))
  ).toFixed(2);
  if (bmi < 16) {
    result.textContent = `your BMI is ${bmi} and you are severely underweight`;
    color.style.backgroundColor = "rgba(255, 114, 0, 0.8)";
  } else if (bmi >= 16 && bmi < 18.4) {
    result.textContent = `your BMI is ${bmi} and you are  underweight`;
    color.style.backgroundColor = "rgba(247, 146, 65, 0.8).8)";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.textContent = `your BMI is ${bmi} and you are normal weight`;
    color.style.backgroundColor = "rgba(0, 255, 0, 0.8)";
  } else if (bmi >= 25 && bmi < 29.9) {
    result.textContent = `your BMI is ${bmi} and you are overweight`;
    color.style.backgroundColor = "rgba(255, 255, 0, 0.8)";
  } else if (bmi >= 30 && bmi < 34.9) {
    result.textContent = `your BMI is ${bmi} and you are obese class 1`;
    color.style.backgroundColor = "rgba(252, 39, 39, 0.8)";
  } else if (bmi >= 35 && bmi < 39.9) {
    result.textContent = `your BMI is ${bmi} and you are obese class 2`;
    color.style.backgroundColor = "rgba(228, 74, 74, 0.8)";
  } else {
    result.textContent = `your BMI is ${bmi} and you are obese class 3`;
    color.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
  }
});
