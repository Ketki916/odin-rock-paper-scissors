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
        return "It's a tie!";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors.";
        }
        else {
            return "You lose! Paper beats Rock.";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You lose! Scissors beats Paper.";
        }
        else {
            return "You win! Paper beats Rock";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats Paper.";
        }
        else {
            return "You lose! Rock beats Scissors"
        }
    }
}

function game() {
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
}