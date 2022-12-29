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