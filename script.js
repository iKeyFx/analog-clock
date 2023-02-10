setInterval(setClock, 1000);

const handSeconds = document.querySelector("[data-seconds-hand]");
const handMinute = document.querySelector("[data-minute-hand]");
const handHour = document.querySelector("[data-hour-hand]");

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  setRotaion(handSeconds, secondRatio);
  setRotaion(handMinute, minuteRatio);
  setRotaion(handHour, hourRatio);
}

function setRotaion(elemet, rotationRatio) {
  elemet.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();
