
//DOM Variables
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;

let increment = () => {
    count = count += 1;
    countEl.innerText = count;
}

let save = () => {
    let countStr = count + " - ";
    saveEl.textContent += countStr
    //RESET.
    countEl.textContent = 0
    count = 0
}


// node index.js

