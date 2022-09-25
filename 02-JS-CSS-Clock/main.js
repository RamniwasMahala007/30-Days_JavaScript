setInterval(setDate, 1000);

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  // console.log(now)

  const seconds = (now.getSeconds() / 60);
  secondHand.style.setProperty('--rotation', seconds*360);

  const mins = ((seconds + now.getMinutes()) / 60);
  minsHand.style.setProperty('--rotation', mins*360);

  const hours = ((mins + now.getHours())/12)*360;
  hourHand.style.setProperty('--rotation', hours);
  //console.log(hourHand);
}

setDate();



