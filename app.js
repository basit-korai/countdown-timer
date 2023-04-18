const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const countdown = document.querySelectorAll(".deadline-format h4");

// Date Setup
// const futureDate = new Date("April 30, 2023 12:30:00"); Hard-coded value for testing purposes.
const tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 2, 12, 30, 0);


const weekday = weekdays[futureDate.getDay()];
const monthdate = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday}, ${monthdate} ${month} ${year}, ${hours}:${minutes}am`;

// Future Time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);

  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60mins
  // 1d = 24hrs

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // Calculating the values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / oneSecond);

  const timeValues = [days, hours, minutes, seconds];

  countdown.forEach((item, index) => {
    item.innerHTML = timeValues[index];
  });

  if (t < 0) {
    clearInterval(live);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has ended</h4>`;


  }
}

// Note for my future self. Methods are still invoked even if they are assigned to a variable. Well, this one's working so i'm going to assume, so will others.
let live = setInterval(getRemainingTime, 1000);

getRemainingTime();