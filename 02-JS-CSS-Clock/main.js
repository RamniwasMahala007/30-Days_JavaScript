//console.log("Hii it is for checking js file working or not");

const secondHand = document.querySelector('.second');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');




setInterval(setDate, 1000);
//let i=0;
function setDate(){
  //  console.log("ramniwas print ho rha h ya nahi har second par",i++); 

  const currentdate = new Date();
  //console.log(currentdate)
  const mysec= currentdate.getSeconds();
 // console.log(mysec)

 const anglesec = ((mysec/60)*360) + 90;

 secondHand.style.transform = `rotate(${anglesec}deg)`;

 //console.log(anglesec)   ------->>   these are showing value in degree
 
}