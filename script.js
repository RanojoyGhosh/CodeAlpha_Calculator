const element = document.getElementsByTagName('li');
const screen = document.querySelector('p');
const clear = document.getElementById('clear');

for(let i = 0;i<element.length; i+=1){ // i++
    if(element[i].innerHTML === '='){
        element[i].addEventListener("click",calculate(i));
    }else{
        element[i].addEventListener("click",addToCurrentValue(i));
    }
}

function addToCurrentValue(i){
    return function(){
        if(element[i].innerHTML === "x"){ 
            screen.innerHTML += '*';
        }
        else if(element[i].innerHTML === "÷"){ 
            screen.innerHTML += '/';
        }
        else{
            screen.innerHTML += element[i].innerHTML;
        }
    }
}

function calculate(i){
    return function(){
        screen.innerHTML = eval(screen.innerHTML);
    }
}

clear.onclick = function(){
    screen.innerHTML = " ";
}

// For Keyboard Support
document.addEventListener("keydown", function (e) {
    const key = e.key;
    if (!isNaN(key) || key === ".") {
        screen.innerHTML += key;
    }

    if (["+", "-", "*", "/"].includes(key)) {
        screen.innerHTML += key;
    }
    if (key === "Enter") {
        try {
            screen.innerHTML = eval(screen.innerHTML);
        } catch (error) {
            screen.innerHTML = "Error";
        }
    }
    if (key === "Backspace") {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }
    if (key === "Escape") {
        screen.innerHTML = "";
    }
});