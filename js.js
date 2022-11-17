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

// randomNumber Engine
let randomNumberLvl1 = Math.trunc(Math.random() * 5) + 1; 
 

//decrease lives engine 
let lives = 5; 
let highScoreNumber = 0; 
let level = 1; 
let levelToGuess = 5;





// IF state for input = randomNumber for level 1 
numberBtn.addEventListener('click', () => {

if (!numberInput.value) { 
    numberMain.innerHTML = "Needs a number"
}


else if (numberInput.value < randomNumberLvl1) { 
   
    if(lives > 1) { 
        numberMain.innerHTML = "Too Low"
        // document.body.style.backgroundColor = "red";
        lives--; 
        scoreNumber.textContent = lives; 
    }
    else {
        scoreNumber.textContent = '0'
        numberMain.innerHTML = "Game-Over"

    }
}
else if (numberInput.value > randomNumberLvl1) { 
    if(lives > 1) { 
        numberMain.innerHTML = "Too high"
        // document.body.style.backgroundColor = "red";
        lives--; 
        scoreNumber.textContent = lives; 
    }
    else {
        scoreNumber.textContent = '0'
        numberMain.innerHTML = "Game-Over"

    }
}

else if (numberInput.value == randomNumberLvl1) { 
    numberMain.innerHTML = randomNumberLvl1; 
    document.body.style.backgroundColor = "lightgreen";  
    // highScore.textContent = lives; // Adds highscore 

    if ( lives > highScoreNumber) {
        highScoreNumber = lives;  
        highScore.textContent = highScoreNumber; 
    }
} 
}) 


// Want to change header, random button function, and level. 
nextLevelBtn.addEventListener('click', () => { 

    if ( !numberInput.value) {
        nextLevelBtn.style.color = "red"; 
  
    } 
    else { 
        lives = lives + 5; 
        level++; 
    levelToGuess = levelToGuess + 5; 
    document.querySelector('.level').innerHTML = `Level ${level}`; 
    header.innerHTML = `Guess the Number (1 to ${levelToGuess})`; 
    document.body.style.backgroundColor = 'white'; 
    numberInput.value = ''; 
    numberMain.textContent = '?'
    scoreNumber.textContent = lives;   
    
    if( highScoreNumber > 0 && highScoreNumber < 5) { 
        randomNumberLvl1 = (Math.trunc(Math.random() * 10) + 1);  
    }
    if( highScoreNumber > 5 && highScoreNumber < 10) { 
        randomNumberLvl1 = (Math.trunc(Math.random() * 15) + 1); 
    }
    if( highScoreNumber > 10 && highScoreNumber < 15) { 
        randomNumberLvl1 = (Math.trunc(Math.random() * 20) + 1); 
    }
    if( highScoreNumber > 20 && highScoreNumber < 25) { 
        randomNumberLvl1 = (Math.trunc(Math.random() * 25) + 1); 
    }


    console.log(randomNumberLvl1); 
    }

    
})


// Again rests the page, but not the highscore 
again.addEventListener('click', () => { 
lives = 5 
randomNumberLvl1 = Math.trunc(Math.random() * 5) + 1; 

scoreNumber.textContent = lives; 
document.body.style.backgroundColor= "white";
numberInput.value = ''; 
numberMain.textContent = '?'


} 
)


