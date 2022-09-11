window.addEventListener('keydown',(e)=>{                             //yaha par mene direct function call karaya hai

    var sound=document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if(sound)
    {
        sound.play();
       sound.currentTime = 0;
    }





})