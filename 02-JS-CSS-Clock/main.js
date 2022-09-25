// setInterval(setDate, 1000);

// const secondHand = document.querySelector('.second-hand');
// const minsHand = document.querySelector('.minute-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate() {
//   const now = new Date();
//   // console.log(now)

//   const seconds = (now.getSeconds() / 60);
//   secondHand.style.setProperty('--rotation', seconds*360);

//   const mins = ((seconds + now.getMinutes()) / 60);
//   minsHand.style.setProperty('--rotation', mins*360);

//   const hours = ((mins + now.getHours())/12)*360;
//   hourHand.style.setProperty('--rotation', hours);
//   //console.log(hourHand);
// }

// setDate();





setInterval(setDate, 1000);

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

 function setDate() {
  const now = new Date();
  //console.log(now)
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) ;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((secondsDegrees / 360 + mins) / 60) * 360;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((minsDegrees / 360 + hour) / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  //console.log(hourHand);
}



setDate();