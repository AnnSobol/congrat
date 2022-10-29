let birthday = prompt("What is ur birthday date?");
if (+birthday === 29) {
  alert("Happy Birthday!!!!!!");
  description.setAttribute("src", "HB.jpg");
} else {
  alert("You should type 29");
}

let dateTime = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[dateTime.getDay()];
currentHour = dateTime.getHours();
currentHour = currentHour > 9 ? currentHour : "0" + currentHour;
let currentMinutes = dateTime.getMinutes();

currentMinutes = currentMinutes > 9 ? currentMinutes : "0" + currentMinutes;
dateTime = `${currentDay}, ${currentHour}:${currentMinutes}`;

document.querySelector("#date").innerHTML = dateTime;
