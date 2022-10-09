const hero=document.querySelector('.hero');
const text=hero.querySelector('h1');


 function shadow(e)
 {
     // const width = hero.offsetWidth;
        // const height = hero.offsetHeight;
        //above syntax write in one line as shown below by ES6 syntax
        const { offsetWidth: width, offsetHeight: height } = hero;  // ES6 syntax
        let { offsetX: x, offsetY: y } = e;  // ES6 syntax

        console.log(x, y);
 }


 hero.addEventListener('mousemove', shadow);

 
  