const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const warning = document.querySelector("#warning");

debugger;
button.addEventListener("click", function(){
    let number = parseInt(input.value);

    if(isNaN(number)){
        warning.innerHTML = "<span>*Введите число</span>";
    }
    else{
    number = number ** 2;
    input.value = number;
    warning.innerHTML = "";
    }
})