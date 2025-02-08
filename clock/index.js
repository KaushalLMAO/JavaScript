//dom
let hour = document.querySelector(".time__hour");
let minute = document.querySelector(".time__minute");
let second = document.querySelector(".time__second");
let dates = document.querySelector(".date");

setInterval(() => {
  const time = new Date();
  let h = time.getHours();
  let period = h >= 12 ? "PM" : "AM";
  if (period === "PM") {
    h = h - 12;
  }
  let m = time.getMinutes();
  let s = time.getSeconds();
  dates.textContent = `${h}:${m}:${s} ${period}`;
  //rotate
  let sdeg = s * 6;
  second.style.transform = `rotate(${sdeg}deg)`;
  let mdeg = m * 6 + s * 0.1;
  minute.style.transform = `rotate(${mdeg}deg)`;
  let hdeg = h * 30 + m * 0.5;
  hour.style.transform = `rotate(${hdeg}deg)`;
}, 1000);
