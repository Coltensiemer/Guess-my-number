'use strict'

console.log(document.getElementById("again-btn")); 

const again = document.getElementById("again-btn"); // reset the page beside highscore 
const numberMain = document.getElementById('the-number'); // random number 
const numberInput = document.querySelector('.guess'); // input 
const numberBtn = document.getElementById('input-btn'); //check button 


// RandomNumber Engine
const randomNumber = Math.trunc(Math.random() * 20) + 1; 


// IF state for input = RandomNumber 
numberBtn.addEventListener('click', () => {
if (numberInput.value == randomNumber) { 
    numberMain.innerHTML = randomNumber; 
}

else if (numberInput.value < randomNumber) { 
    numberMain.innerHTML = "Too Low"
}

else { 
    numberMain.innerHTML = "Too high"
}

}) 


