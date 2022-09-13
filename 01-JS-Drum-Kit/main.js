window.addEventListener('keydown',function(e){                             //yaha par mene direct function call karaya hai

    const sound=document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(sound);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    
  //console.log(key);
    if(!sound)
    {
        return;
    }
      
       sound.currentTime = 0;
       sound.play();
       key.classList.add('playing');
})

const keys = document.querySelectorAll('.key');
//console.log(keys);
keys.forEach(function(key){

    //console.log(e);
    key.addEventListener('transitionend' , function(e){
        //console.log(e); 

        if(e.propertyName !== "transform"){
            return;   
        }
        
        this.classList.remove('playing');
    })
})