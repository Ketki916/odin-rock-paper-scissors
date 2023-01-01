if (games == null && userScore == null && computerScore == null) {
    var games = 0;
    var userScore = 0;
    var computerScore = 0;
}

function getComputerChoice() {
    let num = Math.floor(Math.random()*3) + 1;
    if (num == 1) {
        return "rock";
    }
    if (num == 2) {
        return "paper";
    }
    if (num == 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        // return "It's a tie!";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            userScore = userScore + 1;
            // return "You win! Rock beats Scissors.";
        }
        else {
            computerScore = computerScore + 1;
            // return "You lose! Paper beats Rock.";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerScore = computerScore + 1;
            // return "You lose! Scissors beats Paper.";
        }
        else {
            userScore = userScore + 1;
            // return "You win! Paper beats Rock";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            userScore = userScore + 1;
            // return "You win! Scissors beats Paper.";
        }
        else {
            computerScore = computerScore + 1;
            // return "You lose! Rock beats Scissors"
        }
    }

    games = games + 1;
}


var rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', event => {playRound('rock',getComputerChoice()), checkGames()});

var paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', event => {playRound('paper', getComputerChoice()), checkGames()});

var scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', event => {playRound('scissors', getComputerChoice()), checkGames()});

var scores = document.querySelector('.scores');
var final = document.querySelector('.final');




function checkGames() {
    scores.textContent = "You: " + userScore + "  Computer: " + computerScore;
    if (games == 5) {
        if (userScore > computerScore){
            final.textContent = "You win the game!"
            // return "You win the game!";
        }
        else if (userScore < computerScore) {
            final.textContent = "You lose the game!"
            // return "You lose the game!";
        }
        else {
            final.textContent = "It's a tie!"
            // return "It's a tie!"
        }
    }

}






/* function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        userInput = prompt("Pick Rock, Paper, or Scissors");
        let result = playRound(userInput, getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            userScore++;
        }
        if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (userScore > computerScore) {
        console.log("You won the game!");
    }
    else if (userScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("It's a tie!");
    }
} */