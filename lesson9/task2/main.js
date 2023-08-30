const input = document.querySelector("#input_text");
const button = document.querySelector("#btn");
const warning1 = document.querySelector("#warning1")
const warning2 = document.querySelector("#warning2")

debugger;

button.addEventListener("click", function(){
    if(input.value === ""){
        warning1.innerHTML = "<span>*Поле обязательно для заполнения</span>"
    }
    else{
        warning1.innerHTML = ""
    }
    if(input.value.length < 3){
        warning2.innerHTML = "<span>*Поле должно содержать не менее 3-х символов</span>"
    }
    else{
        warning2.innerHTML = ""
    }
})
