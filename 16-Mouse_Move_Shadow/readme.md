> This is a JavaScript practice with [JavaScript30](https://javascript30.com/) by [Wes Bos](https://github.com/wesbos) without any frameworks, no compilers, no boilerplate, and no libraries.

# 16 - CSS Text Shadow Mouse Move Effect

![](images/demo.png)

view demo [here](https://ramniwasmahala007.github.io/30-Days_JavaScript/16-Mouse_Move_Shadow/)

## what did I learn ?

- `contenteditable`:-- You can edit the content by writing it at the beginning of the html tag.

- `text-shadow`:--I learned something about the new css property text-shadow.
                Each shadow is described by some combination of X and Y offsets from the element,
                blur radius, and color.


                '''
                /* offset-x | offset-y | blur-radius | color */
                text-shadow: 1px 1px 2px black;

## mousemove event :               '''
- `mousemove`:--our `mousemove` event linked with `hero` element, and we want to do text shadow effect
                on its text, right in the `h1` tag

               ```
               const hero = document.querySelector('.hero');
               const text = hero.querySelector('h1');
               
               hero.addEventListener('mousemove', shadow);
               ```
## shadow function :
- set the `width` and `height` of `hero`:-
  
        ```
        const width = hero.offsetWidth;
        const height = hero.offsetHeight;
        let x = e.offsetX;
        let y = e.offsetY;

        ```
- Above code also written in one line using ES6 Syntx :-

        ```
        const { offsetWidth: width, offsetHeight: height } = hero;
        let { offsetX: x, offsetY: y } = e;
        ```
- Here `offsetX` property returns the x-coordinate of the mouse pointer, relative to the target element. and
  `offsetY` property returns the y-coordinate of the mouse pointer, relative to the target element.
- The `offsetWidth` property returns the viewable width of an element (in pixels) including padding,
   border and scrollbar, but not the margin.
- The `offsetHeight` property returns the viewable height of an element (in pixels), including 
   padding, border and scrollbar, but not the margin.

- The `offsetLeft` property returns the left position (in pixels) relative to the parent.The returned value includes:       
1. the left position, and margin of the element
2. the left padding, scrollbar and border of the parent.

- The offsetTop property returns the top position (in pixels) relative to the parent.The returned value includes:
1. the top position, and margin of the element
2. the top padding, scrollbar and border of the parent

> now we `console.log(this, e.target);` out will see that this is indicates '.hero' and e.target indicates 'h1'.

> `walk` is defined to calculate the spacings between shadows, the value is more higher, the spacing is more bigger

- the CSS part, add the `textShadow` effect

```
text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.6),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.5),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.4)
`;
```