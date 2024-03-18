const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const hrs = document.getElementById("hrs");
const mins = document.getElementById("min");
const sec = document.getElementById("sec");

const today = new Date();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate(); // Added parentheses after getDate
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

setInterval(() => {
  let date = new Date();
  hrs.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
  mins.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  sec.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 1000);
