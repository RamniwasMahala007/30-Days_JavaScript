> This is a JavaScript practice with [JavaScript30](https://javascript30.com/) by [Wes Bos](https://github.com/wesbos) without any frameworks, no compilers, no boilerplate, and no libraries.

# 11 - Custom Video Player

![](images/11_00.png)

view demo [here](https://ramniwasmahala007.github.io/30-Days_JavaScript/11-Custom_Video_Player/)

> Mainly divided this javascript in 3 steps so that it can be easily understood
 1. Get all the elements we need.
 2. Build out functions.
 3. Hook up the event listeners


### Get our elements :--

```js:

    const player = document.querySelector('.player');
    const video = document.querySelector('.viewer');
    const progress = document.querySelector('.progress');
    const progressBar = document.querySelector('.progress__filled');
    const toggle = document.querySelector('.toggle');
    const skipButtons = document.querySelectorAll('[data-skip]');
    const ranges = document.querySelectorAll('.player__slider');

```
-                 OR(WE CAN ALSO WRITE ABOVE CODE )

```JS:
    
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');
    const fullScreen = player.querySelector('.fullscreen');
    
```

### Build out functions :--

- function togglePlay()
  - click the video to play
  - `.paused` is the property of `video`
  - `play()` Starts playing the audio/video.
  - `pause()` Pauses the currently playing audio/video.

   ```js

  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
  ```
 - above code written in one lile as shown below and through string here we can simply just call video access 
   the method name.
  ```js
   const method = video.paused ? 'play' : 'pause';
   video[method]();
  ```
 
  above sring code equals to:

  ```js
  video[vdeo.paused ? 'play' : 'pause']();
  ```
- function updateButton()
  - toggle the play button during the video plays or pauses

  to change icon, in this case is change the `textContent` property

  ```js

  const icon = this.paused ? '►' : '❚ ❚';  // `this` is the `video`
  toggle.textContent = icon;
  console.log({toggle});  // log the `{toggle}` out to see where the `textContent` is

  ```

  - function skip()
    - click the skip buttons to skip

      the two skip buttons are: `<button data-skip="-10"></button>` and `<button data-skip="25"></button>`
  
      ```js
        console.log(this.dataset.skip);
        video.currentTime += parseFloat(this.dataset.skip);
      ```
     `console.log(this.dataset)` can get the information which is the value we just added as `data-skip`  attribute on HTML like:

     then we use its `skip` property and `parseFloat` into a float number to `-10s` or `+10s`  the `currentTime`
  
### Hook up the event listeners

- click the video to play

  ```js
  video.addEventListener('click', togglePlay);
  ```

- toggle the play button icon when the video plays or pauses

  ```js
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  ```

- update the progress bar when the video plays

  ```js
  video.addEventListener('timeupdate', handleProgress);
  ```

- toggle the play butotn to play or pause

  ```js
  toggle.addEventListener('click', togglePlay);
  ```

- click to skip (to `-10s` or `+10s`)

  ```js
  skipButtons.forEach(button => button.addEventListener('click', skip));
  ```

- handle range input sliders

  add `mousemove` event for updating real-time, rather than just when we let go of the button

  ```js
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
  ```

- change the progress bar width when we click or drag on it

  ```js
  progress.addEventListener('click', scrub);
  ```


 