// scripts.js - custom JavaScript for this site

"use strict";

let daysleft = document.querySelector("#days");
let hoursleft = document.querySelector("#hours");
let minutesleft = document.querySelector("#minutes");
let secondsleft = document.querySelector("#seconds");
let countDownDate = new Date("Sep 14, 2029 00:00:00").getTime();

let countdownfunc = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  daysleft.textContent = days + "d ";
  hoursleft.textContent = hours + "h ";
  minutesleft.textContent = minutes + "m ";
  secondsleft.textContent = seconds + "s ";

  if (timeleft < 0) {
    clearInterval(countdownfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "That's all folks!!";
  }
}, 1000);
