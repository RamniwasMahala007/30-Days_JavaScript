const inputs = document.querySelectorAll('.controls input');
// console.log(inputs)

// let arr=[1,2,3]
// console.log(arr)

// console.log(inputs.item(0));
// console.log(inputs.item(1));
// console.log(inputs.item(2));

inputs.forEach(function(input){
    input.addEventListener('change',updatehandle)
})

function updatehandle()
{
  const suffix=this.dataset.sizing || '';
  //console.log(suffix)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
