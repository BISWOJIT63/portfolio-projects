let display = document.getElementById("dis");
let buttons = document.querySelectorAll('button');

let string = '';
let array = Array.from(buttons);

array.forEach(button =>{button.addEventListener("click", (e) =>{
    if(e.target.innerHTML == "="){
        string = string.replace(/x/g, "*");
        string = string.replace(/÷/g, "/");
        string = eval(string);
        display.value = string;
    }
    else if(e.target.innerHTML == "AC"){
        string = '';
        display.value = string;
    }
    else if(e.target.innerHTML == "DEL"){
        string = string.substring(0,string.length-1);
        display.value = string;
    }
    else{
        string += e.target.innerHTML;
        display.value = string;
    }
});
});