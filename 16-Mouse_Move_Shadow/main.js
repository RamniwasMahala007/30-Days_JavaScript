const hero=document.querySelector('.hero');
const text=hero.querySelector('h1');
const walk= 500;//500px

 function shadow(e)
 {
     // const width = hero.offsetWidth;
        // const height = hero.offsetHeight;
        //above syntax write in one line as shown below by ES6 syntax
        const { offsetWidth: width, offsetHeight: height } = hero;  // ES6 syntax
        let { offsetX: x, offsetY: y } = e;  // ES6 syntax

        // console.log(x, y);
       //console.log(this,e.target);
       if(this !== e.target){
        x= x+e.target.offsetLeft;
        y= y+e.target.offsetTop;
       }
       //console.log(x,y);
      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));
      //console.log(xWalk,yWalk);
      text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.6),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.5),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.4)
    `;
 }


 hero.addEventListener('mousemove', shadow);

  