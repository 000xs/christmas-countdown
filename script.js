const christmas = new Date("December 25, 2024 00:00:00").getTime();
const now = new Date().getTime();
const distance = christmas - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const message = document.getElementById("message");

const snow = document.getElementById("snow");


function createSnow() {
  const numberOfSnowflakes = 100;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";

    const size = Math.random() * 4 + 2;
    const startPosition = Math.random() * window.innerWidth;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startPosition}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.animationDuration = `${duration}s`;

    snow.appendChild(snowflake);
  }
}

function updateCountdown() {
  day.textContent = days.toString().padStart(2, "0");
  hour.textContent = hours.toString().padStart(2, "0");
  minute.textContent = minutes.toString().padStart(2, "0");
  second.textContent = seconds.toString().padStart(2, "0");

  const messages = [
    "🎄 The holiday magic is in the air! 🎄",
    "🎅 Santa's workshop is busy preparing! 🎁",
    "⭐ Make a wish upon the Christmas star! ⭐",
    "🦌 Rudolph is getting ready! 🦌",
    "🔔 Can you hear the sleigh bells? 🔔",
  ];
  if (days % 1 === 0) {
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
  }
}

createSnow();
updateCountdown();
setInterval(updateCountdown, 1000);
