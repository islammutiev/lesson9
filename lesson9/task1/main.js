const number1 = document.querySelector("#input1");
const number2 = document.querySelector("#input2");
const block = document.querySelector("#block");
const button = document.querySelector("#btn");

button.addEventListener("click", function(){
  block.style.top = number1.value + 'px'
  block.style.left = number2.value + 'px'
});

