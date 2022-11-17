'use strict'


const again = document.getElementById("again-btn"); // restart the page beside highscore 
const numberMain = document.getElementById('the-number'); // random number/ ? 
const numberInput = document.querySelector('.guess'); // input 
const numberBtn = document.getElementById('input-btn'); //check button 
const scoreNumber = document.querySelector('.lives'); //lives value 
const highScore = document.querySelector('.highscore'); // high lives 
const message = document.querySelector('.message'); // message 
const nextLevelBtn = document.getElementById('next-level'); // next level btn 
const header = document.querySelector('.header'); // Gues the number 
const currentScore = document.querySelector(".score-number");/// the score number 



// randomNumber Engine
let randomNumberLvl1 = Math.trunc(Math.random() * 5) + 1; 
console.log(randomNumberLvl1) 


 

//decrease lives engine 
let lives = 5; 
let highScoreNumber = 0; 
let level = 1; 
let levelToGuess = 5;
let scoreValue = 0; 
let addFive = 5
let currentValue = 0; 


// display message engine 
const displayMessage = function (message) { 
    numberMain.innerHTML = message } 



// IF state for input = randomNumber for level 1 
numberBtn.addEventListener('click', () => {

if (!numberInput.value) { 
   displayMessage("Guess a number")
}

// else if ( level = 10 ){ 
//     displayMessage("YOU WON"); 
// } 

// If Guess is Wrong 

else if ( lives > 1) {
displayMessage(numberInput.value > randomNumberLvl1 ? "Too high": "Too Low") 
    lives--; 
    scoreNumber.textContent = lives; } 
    else { 
        scoreNumber.textContent = '0'
        displayMessage("Game-Over")
        again.style.background = "red"
        again.style.color = "white"

    }

if (numberInput.value == randomNumberLvl1) { 
    numberMain.innerHTML = randomNumberLvl1; 
    document.body.style.backgroundColor = "lightgreen";
    nextLevelBtn.classList.remove('display-off'); 
    level++; 

    



    if ( level > highScoreNumber) {
        highScoreNumber = level - 1; 
        currentValue= level - 1;  
        currentScore.textContent = currentValue; 
        highScore.textContent = highScoreNumber; 
    }
} 



}) 


nextLevelBtn.addEventListener('keyup', function(e) { 
    if (e.keycode === 'enter') { 
        alert('hi')
    }
})



// Want to change header, random button function, and level. 

nextLevelBtn.addEventListener('click', () => { 

    if (numberInput.value == randomNumberLvl1) {
   addFive = addFive + 5; 
    lives = lives + 5; 
    levelToGuess = levelToGuess + 5; 

    document.querySelector('.level').innerHTML = `Level ${level}`; 
    header.innerHTML = `Guess the Number (1 to ${levelToGuess})`;
    document.body.style.backgroundColor = 'white'; 
    numberInput.value = ''; 
    numberMain.textContent = 'Take a guess'
    scoreNumber.textContent = lives;   
    randomNumberLvl1 = (Math.trunc(Math.random() * addFive) + 1); 
    console.log(randomNumberLvl1); } 


} 
)



// Again rests the page, but not the highscore 
again.addEventListener('click', () => { 
lives = 5 
level = 1

randomNumberLvl1 = Math.trunc(Math.random() * 5) + 1; 
console.log(randomNumberLvl1);

scoreNumber.textContent = lives; 
document.body.style.backgroundColor= "white";
numberInput.value = ''; 
currentScore.textContent = scoreValue; 
numberMain.textContent = '?'
again.style.background = ""
again.style.color = "black"



} 
)


